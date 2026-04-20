from pathlib import Path

files = [
    r'C:\Users\stitc\Documents\site\demos\bddesigns-portfolio\src\App.tsx',
    r'C:\Users\stitc\Documents\site\demos\bddesigns-portfolio\src\components\BottomNav.tsx',
    r'C:\Users\stitc\Documents\site\demos\bddesigns-portfolio\src\components\Footer.tsx',
    r'C:\Users\stitc\Documents\site\demos\bddesigns-portfolio\src\components\ImpactShowcase.tsx',
    r'C:\Users\stitc\Documents\site\demos\bddesigns-portfolio\src\components\PartnerSection.tsx',
    r'C:\Users\stitc\Documents\site\demos\bddesigns-portfolio\src\components\PricingSection.tsx',
    r'C:\Users\stitc\Documents\site\demos\bddesigns-portfolio\src\components\ProjectsSection.tsx',
    r'C:\Users\stitc\Documents\site\demos\bddesigns-portfolio\src\components\TestimonialCarousel.tsx',
    r'C:\Users\stitc\Documents\site\demos\bddesigns-portfolio\src\components\TestimonialSection.tsx',
]

for f in files:
    p = Path(f)
    s = p.read_text(encoding='utf-8')
    s = s.replace("font-['PP_Mondwest']", "font-['Times_New_Roman']")
    s = s.replace("font-['PP_Neue_Montreal']", "font-sans")
    p.write_text(s, encoding='utf-8')

print('patched', len(files))
