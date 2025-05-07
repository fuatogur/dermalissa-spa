import Product from "@/types/Product";

const oilDescription = `
    <span>ANTI-BLEMISH, SKIN TONE CORRECTOR AND BRIGHTENER</span>
    SPF 6 (UVA/UV PROTECTION)<br/>
    <span>INDICATIONS FOR USE:</span>
    DULL SKIN, PIGMENTATION, FRECKLES, AGE SPOTS, UNEVEN COMPLEXION, POST ACNE, MELASMA,
    ROSACEA.
    Developed to lighten skin, correct pigmentation of any origin and even out
    complexion.<br/>
    <span>Active Ingredients:</span>
    Tranexamic Acid, Alpha-Arbutin, Niacinamide, Azelaic Acid, Ferulic Acid.
    <span>Additional Active Ingredients:</span>
    Ceramide NP, Vitamin B5, Vitamin E, Allantoin.<br/>
    <span>Action:</span><br/>
    Due to tranexamic acid, which does not increase skin sensitivity and
    does not cause irritation, it helps prevent and correct existing hyperpigmentation
    by
    inhibiting
    the
    <span>√</span> activity of the tyrosinase enzyme and reducing the transfer of
    melanin to
    keratinocytes; <br/>
    <span>√</span> Strengthens the epidermal barrier, thus preventing transdermal
    moisture
    loss;<br/>
    <span>√</span> Reduces the visibility of the vascular network, helps strengthen
    fragile
    capillaries;<br/>
    <span>√</span> Eliminates redness, irritation and various inflammatory processes on
    the
    skin;<br/>
    <span>√</span> Corrects traces of post-acne, evens out skin tone and restores its
    lost
    radiance.<br/>
    <span>Types of Skin:</span> Suitable for all skin types. <span>Application:</span> 2
    times per day (morning and evening).
    <span>Result:</span> Visible improvement is usually observed in 5-6
    weeks. For best results, continue using
    the
    product for several months.
`;

const brighteningCream = `
    <span>INDICATIONS:</span> PIGMENTATION, FLAKING, FINE LINES, ACNE SCARS, DULL SKIN,
    DEHYDRATION.<br/>
    Blend of natural oils enriched with vitamins, squalene and essential fatty acids is
    developed for
    all skin types to prevent pigmentation, flaking, fine lines, acne scars, dull skin
    and
    dehydration.<br/>
    <span>Active Ingredients:</span> Squalene, Vitamin E, Vitamin C, Essential Fatty
    Acids.<br/>
    <span>Action:</span><br/>
    <span>√</span> Effective moisturizer and revitalizer with anti-aging properties is
    the
    perfect addition to your
    daily skincare routine;<br/>
    <span>√</span> Reduces the appearance of fine lines, soothes skin and prevents
    irritation;<br/>
    <span>√</span> Encourages wound healing, minimizing the appearance of scars;<br/>
    <span>√</span> Evens skin texture, brightens and rejuvenates your skin;<br/>
    <span>√</span> Stimulates collagen synthesis, strengthens the skin's barrier and
    boosts
    its glow.<br/>
    <span>Types of Skin:</span> All Skin Types. <span>Application:</span> 2 times per
    day
    (morning and evening), the product can
    be used alone or together with other skin care
    products. <span>Result:</span> Visible
    improvement is usually
    observed in 3-4 weeks. For best results, continue using the product for several
    months.
`;

const retiolNightCream = `
    <span>INDICATIONS FOR USE:</span> WRINKLES, UNEVEN COMPLEXION, PIGMEN-TATION,
    DULLNESS,
    DARK SPOTS.<br/>
    Restorative, rejuvenating night cream with encapsulated retinol is developed to
    prevent
    and reduce age-related skin changes.<br/>
    <span>Active Ingredients:</span> Retinol, Ceramide NP, Palmitoyl Tripeptide-5,
    Ectoine.<br/>
    <span>Additional Active Ingredients:</span> Saccharide Isomerate, Niacinamide,
    Vitamin B5, Avocado Butter, Shea Butter, Vitamin E, Lavender Oil, Allantoin.<br/>
    <span>Action:</span><br/>
    <span>√</span> Helps activate the processes of collagen and elastin production;<br/>
    <span>√</span> Increases skin firmness and elasticity, evens out skin tone and
    reduces
    pigmentation;<br/>
    <span>√</span> Has an antioxidant effect (neutralizes the effects of free radicals),
    preventing premature aging;<br/>
    <span>√</span> Activates the processes of night restoration of the epidermis at the
    cellular level;<br/>
    <span>√</span> Has a nourishing, regenerating and tightening effect on the
    skin.<br/>
    <span>Types of Skin:</span> Suitable for all skin
    types. <span>Application:</span> Only
    in the evening. <span>Result:</span> Visible improvement is usually observed in 4-6
    weeks. For best results, continue using the product for several months.
`;

const vitaminCCream = `
    <span>ANTI-AGING EFFECT & UV PROTECTION</span><br/>
    <span>INDICATIONS FOR USE:</span> PHOTOAGING, PIGMENTATION, AGE SPOTS.
    Developed for slowing down the skin aging process. Stimulates collagen synthesis,
    restoring the skin's natural radiance, elasticity and firmness.<br/>
    <span>Active Ingredients:</span> Vitamin C, Vitamin E, Ferulic Acid.<br/>
    <span>Additional Active Ingredients:</span> Niacinamide, Squalene, Vitamin B5,
    Avocado Butter, Shea Butter, Alpha-Arbutin, Ectoine, Allantoin, Hyaluronic
    Acid.<br/>
    <span>Action:</span><br/>
    <span>√</span> Slows down the process of photoaging and reduces the effects of
    harmful
    effects of UV radiation;<br/>
    <span>√</span> Provides an antioxidant effect while fighting free radicals and
    negative
    environmental influences;<br/>
    <span>√</span> Prevents the formation of age spots, evens out skin tone by
    suppressing
    the production of melanin;<br/>
    <span>√</span> Activates regeneration processes, nourishes and moisturizes.<br/>
    <span>Types of Skin:</span> Suitable for all skin types. <span>Application:</span> 2
    times per
    day (morning and evening). <span>Result:</span> Visible improvement is usually
    observed
    in 4-6 weeks. For best results, continue using the product for several months.
`;

const ultraHydratingCream = `
<span>ULTRA HYDRATING CREAM WITH NATURAL PREBIOTICS</span><br/>
<span>INDICATIONS FOR USE:</span> DRYNESS & FLAKING, DEHYDRATED SKIN.
Developed for dry, sensitive and dehydrated skin with long-lasting moisturizing
effect.<br/>
<span>Active Ingredients:</span> Saccharide Isomerate, Ceramide NP, Inulin,
Fructose,
Hyaluronic Acid, Ectoine.<br/>
<span>Additional Active Ingredients:</span> Niacinamide, Panthenol (Vitamin B5),
Tocopheryl Acetate (Vitamin E), Sweet Almond Oil, Allantoin.<br/>
<span>Action:</span><br/>
<span>√</span> Intensively moisturizes and nourishes the skin, protects it from
dehydration;<br/>
<span>√</span> Increases the firmness and elasticity of the epidermis, preventing
premature age-related changes;<br/>
<span>√</span> Eliminates irritation and atopic conditions, makes the skin smoother
and
softer;<br/>
<span>√</span> Prebiotics restore and maintain the balance of the skin microbiome,
strengthen its protective barrier, and increase the skin's resistance to
external factors.<br/>
<span>Types of Skin:</span> Dry, Dehydrated & Sensitive
Skin. <span>Application:</span> 2
times per day (morning and evening). <span>Result:</span> Visible improvement is
usually
observed in 2-3 weeks. For best results, continue using the product for several
months.
`;

const creamForAcneProneSkin = `
<span>INDICATIONS FOR USE:</span> ACNE, INFLAMMATION, REDNESS, BLACK-HEADS,
PIGMENTATION.<br/>
Developed for all skin types prone to acne, inflammation, redness, blackheads,
pigmentation.<br/>
<span>Active Ingredients:</span> Azelaic Acid, Ferulic Acid, Ectoine,
Niacinamide.<br/>
<span>Additional Active Ingredients:</span> Vitamin B5, Vitamin E, Grape Seed Oil,
Inulin, Fructose, Rosemary Oil, Allantoin.<br/>
<span>Action:</span><br/>
<span>√</span> Has an antibacterial effect (suppresses the growth of bacteria
Propionibacterium Acne and Staphylococcus Epidermidis, which cause acne);<br/>
<span>√</span> Has an exfoliating effect (reduces hyperkeratinization of the
epidermis,
which is a factor in the development of acne);<br/>
<span>√</span> Shows anti-inflammatory properties (slows down the process of
inflammation, relieves skin redness);<br/>
<span>√</span> Regulates the functioning of the sebaceous glands;<br/>
<span>√</span> Lightens post-acne, evens out skin tone (by normalizing melanin
synthesis);<br/>
<span>√</span> Provides visible results in the correction of pigmentation.<br/>
<span>Types of Skin:</span> Suitable for all skin types with acne, inflammation,
redness, blackheads and pigmentation. <span>Application:</span> 2 times per day
(morning
and evening). <span>Result:</span> Visible improvement is usually observed in 4-6
weeks.
For best results, continue using the product for several months.
`;

const antiWrinkleCream = `
<span>INDICATIONS FOR USE:</span> LOSS OF SKIN ELASTICITY, WRINKLES, UN-EVEN SKIN
TEXTURE, PIGMENTATION, DULL COMPLEXION.<br/>
Developed to eliminate signs of age-related changes, reduce wrinkles, increase skin
firmness and elasticity.<br/>
<span>Active Ingredients:</span> Acetyl Hexapeptide-8, Ceramide NP, Palmitoyl
Tripeptide-5, Squalene, Ectoine, Adenosine, Palmitoyl Pentapep-tide-4, Palmitoyl
Tripeptide-1, Palmitoyl Tetrapeptide-7, Hydrolyzed Hyaluronic Acid.<br/>
<span>Additional Active Ingredients:</span> Saccharide Isomerate, Niacinamide,
Vitamin
B5, Vitamin E, Allantoin.<br/>
<span>Action:</span><br/>
<span>√</span> Stimulates the synthesis of elastin and collagen, significantly
reducing
the depth of wrinkles;<br/>
<span>√</span> Activates regeneration processes in cells, providing a firming and
lifting effect;<br/>
<span>√</span> Evens out skin tone and provides long-lasting intensive
hydration;<br/>
<span>√</span> Effectively restores skin's elasticity, slows down the aging
process;<br/>
<span>√</span> Provides an instant radiance and healthy glow to your skin.<br/>
<span>Types of Skin:</span> All Skin Types. Age: 35+. <span>Application:</span> 2
times
per day (morning and evening). <span>Result:</span> Visible improvement is usually
observed in 5-6 weeks. For best results, continue using the product for several
months.
`;

const eyeRepairCream = `
<span>INDICATIONS FOR USE:</span> DARK CIRCLES, PUFFINESS, WRINKLES.
Developed for providing complex regenerating care for sensitive and delicate skin
around
the eyes.<br/>
<span>Active Ingredients:</span> Palmitoyl Tripeptide-5, Acetyl Hexapeptide-8,
Ceramide NP, sh-Oligopeptide-1, sh-Oligopeptide-2, sh-Polypeptide-1,
sh-Polypeptide-9,
sh-Polypeptide-11, Sodium Hyaluronate, Adeno-sine, Palmitoyl Pentapeptide-4,
Palmitoyl
Tripeptide-1, Palmitoyl Tetrapeptide-7, Squalane, Ectoine, Hydrolyzed Hyaluronic
Acid.<br/>
<span>Additional Active Ingredients:</span> Saccharide Isomerate, Niacinamide,
Avocado
Oil, Shea Butter, Vitamin B5, Vitamin E, Allantoin.<br/>
<span>Action:</span><br/>
<span>√</span> Stimulates collagen synthesis, significantly reducing the depth of
wrinkles;<br/>
<span>√</span> Provides intense hydration in the area around the eyes;<br/>
<span>√</span> Helps get rid of dark circles under the eyes, reduces puffiness;<br/>
<span>√</span> Protects against free radicals and aggressive environmental
factors.<br/>
<span>Types of Skin:</span> All Skin Types. <span>Application:</span> 2 times per
day
(morning and evening). <span>Result:</span> Visible improvement is usually observed
in
4-5 weeks. For best results, continue using the product for several months.
`;

export const products: Product[] = [
    {
        className: 'REVITALIZING-OIL',
        backgroundColor: '#B0845B',
        bodyColor: 'red',
        slug: 'revitalizing-oil',
        translations: {
            tr: {title: 'REVITALIZING OIL', description: oilDescription},
            en: {title: 'REVITALIZING OIL', description: oilDescription},
            es: {title: 'REVITALIZING OIL', description: oilDescription},
            ru: {title: 'REVITALIZING OIL', description: oilDescription},
            fr: {title: 'REVITALIZING OIL', description: oilDescription},
        },
    },
    {
        className: 'SPF6-UVA-BRIGHTENING-CREAM',
        backgroundColor: '#3CACAF',
        bodyColor: 'blue',
        slug: 'spf6uva-brightening-cream',
        translations: {
            tr: {title: 'SPF6 UVA/ BRIGHTENING CREAM tr', description: brighteningCream},
            en: {title: 'SPF6 UVA/ BRIGHTENING CREAM en', description: brighteningCream},
            es: {title: 'SPF6 UVA/ BRIGHTENING CREAM es', description: brighteningCream},
            ru: {title: 'SPF6 UVA/ BRIGHTENING CREAM ru', description: brighteningCream},
            fr: {title: 'SPF6 UVA/ BRIGHTENING CREAM fr', description: brighteningCream},
        }
    },
    {
        className: 'RETINOL-NIGHT-CREAM',
        backgroundColor: '#7D2180',
        bodyColor: 'yellow',
        slug: 'retinol-night-cream',
        translations: {
            tr: {title: 'RETINOL NIGHT CREAM tr', description: retiolNightCream},
            en: {title: 'RETINOL NIGHT CREAM en', description: retiolNightCream},
            es: {title: 'RETINOL NIGHT CREAM es', description: retiolNightCream},
            ru: {title: 'RETINOL NIGHT CREAM ru', description: retiolNightCream},
            fr: {title: 'RETINOL NIGHT CREAM fr', description: retiolNightCream},
        }
    },
    {
        className: 'ANTIOXIDANT-VITAMIN-C-CREAM',
        backgroundColor: '#F9BA24',
        bodyColor: 'red',
        slug: 'antioxidant-vitamin-c-cream',
        translations: {
            tr: {title: 'ANTIOXIDANT VITAMIN C CREAM tr', description: vitaminCCream},
            en: {title: 'ANTIOXIDANT VITAMIN C CREAM en', description: vitaminCCream},
            es: {title: 'ANTIOXIDANT VITAMIN C CREAM es', description: vitaminCCream},
            ru: {title: 'ANTIOXIDANT VITAMIN C CREAM ru', description: vitaminCCream},
            fr: {title: 'ANTIOXIDANT VITAMIN C CREAM fr', description: vitaminCCream},
        }
    },
    {
        className: 'ULTRA-HYDRATING-CREAM',
        backgroundColor: '#3E89C7',
        bodyColor: 'red',
        slug: 'ultra-hydrating-cream',
        translations: {
            tr: {title: 'ULTRA HYDRATING CREAM tr', description: ultraHydratingCream},
            en: {title: 'ULTRA HYDRATING CREAM en', description: ultraHydratingCream},
            es: {title: 'ULTRA HYDRATING CREAM es', description: ultraHydratingCream},
            ru: {title: 'ULTRA HYDRATING CREAM ru', description: ultraHydratingCream},
            fr: {title: 'ULTRA HYDRATING CREAM fr', description: ultraHydratingCream},
        }
    },
    {
        className: 'CREAM-FOR-ACNE-PRONE-SKIN',
        backgroundColor: '#58B492',
        bodyColor: 'red',
        slug: 'cream-for-acne-prone-skin',
        translations: {
            tr: {title: 'CREAM FOR ACNE PRONE SKIN tr', description: creamForAcneProneSkin},
            en: {title: 'CREAM FOR ACNE PRONE SKIN en', description: creamForAcneProneSkin},
            es: {title: 'CREAM FOR ACNE PRONE SKIN es', description: creamForAcneProneSkin},
            ru: {title: 'CREAM FOR ACNE PRONE SKIN ru', description: creamForAcneProneSkin},
            fr: {title: 'CREAM FOR ACNE PRONE SKIN fr', description: creamForAcneProneSkin},
        }
    },
    {
        className: 'ANTI-WRINKLE-CREAM',
        backgroundColor: '#B9588B',
        bodyColor: 'red',
        slug: 'anti-wrinkle-cream',
        translations: {
            tr: {title: 'ANTI-WRINKLE CREAM tr', description: antiWrinkleCream},
            en: {title: 'ANTI-WRINKLE CREAM en', description: antiWrinkleCream},
            es: {title: 'ANTI-WRINKLE CREAM es', description: antiWrinkleCream},
            ru: {title: 'ANTI-WRINKLE CREAM ru', description: antiWrinkleCream},
            fr: {title: 'ANTI-WRINKLE CREAM fr', description: antiWrinkleCream},
        }
    },
    {
        className: 'EYE-REPAIR-CREAM',
        backgroundColor: '#DB7C83',
        bodyColor: 'red',
        slug: 'eye-repair-cream',
        translations: {
            tr: {title: 'EYE REPAIR CREAM tr', description: eyeRepairCream},
            en: {title: 'EYE REPAIR CREAM en', description: eyeRepairCream},
            es: {title: 'EYE REPAIR CREAM es', description: eyeRepairCream},
            ru: {title: 'EYE REPAIR CREAM ru', description: eyeRepairCream},
            fr: {title: 'EYE REPAIR CREAM fr', description: eyeRepairCream},
        }
    },
];

export default products