import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export async function POST(request: NextRequest) {
  console.log('🚀 API Route: initiate-call - Starting request processing');
  console.log('🌍 API Route: Environment:', process.env.NODE_ENV);
  console.log('🔗 API Route: Request URL:', request.url);
  console.log('📊 API Route: Request headers:', Object.fromEntries(request.headers.entries()));
  
  try {
    const body = await request.json();
    console.log('📥 API Route: Received request body:', JSON.stringify(body, null, 2));
    
    const { phoneNumber } = body;

    // Validate phone number
    if (!phoneNumber) {
      console.log('❌ API Route: Phone number validation failed - missing phoneNumber');
      return NextResponse.json(
        { error: 'Phone number is required' },
        { 
          status: 400,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
          },
        }
      );
    }

    console.log('📞 API Route: Validating phone number:', phoneNumber);

    // Basic phone number validation (adjust regex as needed for Estonian numbers)
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const cleanedPhone = phoneNumber.replace(/\s+/g, '');
    
    if (!phoneRegex.test(cleanedPhone)) {
      console.log('❌ API Route: Phone number validation failed - invalid format:', cleanedPhone);
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { 
          status: 400,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
          },
        }
      );
    }

    console.log('✅ API Route: Phone number validation passed');

    // Prepare webhook payload
    const webhookPayload = {
      phoneNumber: phoneNumber,
      timestamp: new Date().toISOString(),
      source: 'website_ai_test',
    };

    console.log('📤 API Route: Preparing webhook payload:', JSON.stringify(webhookPayload, null, 2));

    // Send phone number to webhook
    try {
      const webhookUrl = 'https://hook.eu2.make.com/86mja8qtogqtcepht3yl0d4t769gcwkv';
      console.log('🔗 API Route: Sending request to webhook:', webhookUrl);

      // Add timeout to webhook request
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

      const webhookResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookPayload),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      console.log('📊 API Route: Webhook response status:', webhookResponse.status);
      console.log('📊 API Route: Webhook response headers:', Object.fromEntries(webhookResponse.headers.entries()));

      if (!webhookResponse.ok) {
        const errorText = await webhookResponse.text();
        console.error('❌ API Route: Webhook request failed');
        console.error('❌ API Route: Webhook error status:', webhookResponse.status);
        console.error('❌ API Route: Webhook error text:', errorText);
        
        return NextResponse.json(
          { error: 'Failed to process request' },
          { status: 500 }
        );
      }

      const webhookResponseData = await webhookResponse.text();
      console.log('✅ API Route: Webhook success response:', webhookResponseData);

      console.log('🎉 API Route: Request processed successfully');
      return NextResponse.json({
        success: true,
        message: 'Request submitted successfully',
      }, {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });

    } catch (webhookError) {
      console.error('❌ API Route: Webhook request threw an error:');
      console.error('❌ API Route: Webhook error name:', (webhookError as Error).name);
      console.error('❌ API Route: Webhook error message:', (webhookError as Error).message);
      console.error('❌ API Route: Webhook error stack:', (webhookError as Error).stack);
      
      return NextResponse.json(
        { error: 'Failed to process request' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('❌ API Route: Top-level error occurred:');
    console.error('❌ API Route: Error name:', (error as Error).name);
    console.error('❌ API Route: Error message:', (error as Error).message);
    console.error('❌ API Route: Error stack:', (error as Error).stack);
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}