# Language Switching Test Plan

## Testing URLs and Expected Behavior

### 1. Homepage
- Visit: `http://localhost:3000/` → Should redirect to `http://localhost:3000/et`
- Visit: `http://localhost:3000/et` → Estonian homepage
- Visit: `http://localhost:3000/en` → English homepage
- Language switch from `/et` → Should go to `/en`
- Language switch from `/en` → Should go to `/et`

### 2. Case Studies Listing
- Visit: `http://localhost:3000/case-studies` → Should redirect to `http://localhost:3000/et/case-studies`
- Visit: `http://localhost:3000/et/case-studies` → Estonian case studies list
- Visit: `http://localhost:3000/en/case-studies` → English case studies list
- Language switch from `/et/case-studies` → Should go to `/en/case-studies`
- Language switch from `/en/case-studies` → Should go to `/et/case-studies`

### 3. Individual Case Studies
- Visit: `http://localhost:3000/case-studies/body-treatment-salon-et` → Should redirect to `http://localhost:3000/et/case-studies/body-treatment-salon-et`
- Visit: `http://localhost:3000/case-studies/maple-street-bistro-en` → Should redirect to `http://localhost:3000/en/case-studies/maple-street-bistro-en`
- Visit: `http://localhost:3000/et/case-studies/body-treatment-salon-et` → Estonian case study
- Visit: `http://localhost:3000/en/case-studies/maple-street-bistro-en` → English case study
- Language switch from Estonian case study → Should go to English equivalent
- Language switch from English case study → Should go to Estonian equivalent

## Fixed Issues

1. ✅ **Language concatenation**: No more `/en/et/case-studies` URLs
2. ✅ **Consistent locale prefixes**: Both Estonian and English now use `/et` and `/en` prefixes
3. ✅ **Smart case study switching**: Language switching now changes the slug suffix from `-et` to `-en` and vice versa
4. ✅ **Middleware redirection**: Legacy URLs without locale prefixes redirect to appropriate locale versions
5. ✅ **Navigation consistency**: All navigation links now use proper locale prefixes

## Key Changes Made

1. Updated `changeLanguage` function in `lib/i18n.ts` to handle case study slug transformation
2. Modified locale detection to recognize both `/et` and `/en` prefixes
3. Updated case studies page to use consistent locale-prefixed URLs
4. Enhanced middleware to handle redirections for both Estonian and English content
5. Updated `getLocalePath` helper to use consistent locale prefixes for both languages
