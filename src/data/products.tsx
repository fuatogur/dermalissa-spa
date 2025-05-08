import Product from "@/types/Product";

const oilDescriptionTr = `
<p><span>ACTIVATOR </span></p>
<p><span>CANLANDIRICI YAĞ</span></p>
<p><span>KULLANIM AMAÇI:</span> PİGMENTASYON, PULLANMA, İNCE KIRIŞIKLIKLAR, AKNE İZLERİ, CANSIZ VE KURU CİLT.</p>
<p>Vitaminler, skualen ve esansiyel yağ asitleri ile zenginleştirilmiş doğal yağların karışımı, pigmentasyon, pullanma, ince kırışıklıklar, akne izleri, cansız ve kuru cilt önlemek için geliştirilmiştir.</p>
<p><span>Aktif İçerikler:</span> Skualen, Vitamin E, Vitamin C, Esansiyel Yağ Asitleri.</p>
<p><span>Nasıl Etki Eder: </span></p>
<p><span>√</span> Günlük cilt bakım rutininize ekleyebileceğiniz, yaşlanma karşıtı özelliğe sahip, etkili bir nemlendirici ve onarıcı üründür;</p>
<p><span>√</span> İnce kırışıklıkların görünümünü azaltır, cildi yatıştırır ve tahrişi önler;</p>
<p><span>√</span> Yara iyileşmesini teşvik eder, yara izlerinin görünümünü en aza indirir;</p>
<p><span>√</span> Cilt dokusunu eşitler, cildinizi aydınlatır ve gençleştirir;</p>
<p><span>√</span> Kolajen sentezini uyarır, cildin koruyucu bariyerini güçlendirir ve parlaklığını artırır.</p>
<p><span>Cilt Tipleri:</span> Tüm cilt tiplerine uygundur. <span>Kullanım:</span> Haricen kullanılır.</p>
<p><span>Uygulama:</span> Günde 2 defa (sabah ve akşam), ürünü tek başına veya diğer cilt bakım ürünleriyle birlikte kullanabilirsiniz.</p>
<p><span>Sonuçlar:</span> Gözle görülür etki genellikle 3 ila 4 hafta sonra gözlemlenir. En iyi sonuçları elde etmek için ürünü birkaç ay kullanmaya devam edin.&nbsp;</p>
`;

const oilDescriptionEn = `
<p><span>ACTIVATOR </span></p>
<p><span>REVITALIZING OIL </span></p>
<p><span>INDICATIONS</span><span>:</span> PIGMENTATION, FLAKING, FINE LINES, ACNE SCARS, DULL SKIN, DEHYDRATION</p>
<p>The blend of natural oils enriched with vitamins, squalene and essential fatty acids is developed to prevent pigmentation, flaking, fine lines, acne scars, dull skin and dehydration.</p>
<p><span>Active Ingredients:</span> Squalene, Vitamin E, Vitamin C, Essential Fatty Acids.</p>
<p><span>Action:</span></p>
<p><span>√</span> Effective moisturizer and revitalizer with anti-aging properties is the perfect addition to your daily skincare routine;</p>
<p><span>√</span> Reduces the appearance of fine lines, soothes skin and prevents irritation;</p>
<p><span>√</span> Encourages wound healing, minimizing the appearance of scars;</p>
<p><span>√</span> Evens skin texture, brightens and rejuvenates your skin;</p>
<p><span>√</span> Stimulates collagen synthesis, strengthens the skin's barrier and boosts its glow.</p>
<p><span>Types of Skin</span>: All Skin Types. <span>Usage:</span> For external use only. <span>Application:</span> 2 times per day (morning and evening), the product can be used alone or together with other skin care products. &nbsp;&nbsp;</p>
<p><span>Result:</span> Visible improvement is usually observed in 3 - 4 weeks. For best results, continue using the product for several months.&nbsp;</p>
`;

const oilDescriptionEs = `
<p><span>ACTIVATOR </span></p>
<p><span>ACEITE REVITALIZANTE</span></p>
<p><span>INDICACIONES DE USO:</span> PIGMENTACIÓN, DESCAMACIÓN, LÍNEAS FINAS, CICATRICES DE ACNÉ, PIEL APAGADA, DESHIDRATACIÓN</p>
<p>La mezcla de aceites naturales enriquecida con vitaminas, escualeno y ácidos grasos esenciales, está formulada para prevenir la pigmentación, la descamación, las líneas finas, las cicatrices del acné, piel apagada y la deshidratación.</p>
<p><span>Ingredientes Activos:</span> Escualeno, Vitamina E, Vitamina C, Ácidos Grasos Esenciales.</p>
<p><span>Acción:</span></p>
<p><span>√</span> Eficaz hidratante y revitalizante con propiedades antienvejecimiento, el complemento perfecto para su rutina diaria de cuidado de la piel;</p>
<p><span>√</span> Reduce la apariencia de líneas de expresión, suaviza la piel y previene la irritación;</p>
<p><span>√</span> Favorece la cicatrización de heridas, minimizando la apariencia de cicatrices;</p>
<p><span>√</span> Unifica la textura de la piel, la ilumina y rejuvenece;</p>
<p><span>√</span> Estimula la síntesis de colágeno, fortalece la barrera protectora de la piel y realza su luminosidad.</p>
<p><span>Tipos de Piel:</span> Apto para todos tipos de piel. <span>Uso:</span> Sólo para uso externo. <span>Aplicación:</span> 2 veces al día (mañana y noche), el producto se puede utilizar solo o junto con otros productos para el cuidado de la piel. <span>Resultado:</span> Generalmente se observa una mejora visible en 3 a 4 semanas. Para obtener mejores resultados, continúe usando el producto durante varios meses.&nbsp;</p>
`;

const oilDescriptionRu = `
<p><span>ACTIVATOR </span></p>
<p><span>МАСЛО ДЛЯ РЕВИТАЛИЗАЦИИ КОЖИ</span></p>
<p><span>ПОКАЗАНИЯ К ПРИМЕНЕНИЮ:</span> ПИГМЕНТАЦИЯ, ШЕЛУШЕНИЕ, МЕЛКИЕ МОРЩИНЫ, ШРАМЫ ОТ АКНЕ, ТУСКЛАЯ КОЖА, ОБЕЗВОЖИВАНИЕ.</p>
<p>Смесь натуральных масел, обогащенная витаминами, скваленом и незаменимыми жирными кислотами, разработана для предотвращения пигментации, шелушения, мелких морщин, шрамов от акне, тусклости кожи и обезвоживания.</p>
<p><span>Активные Ингредиенты:</span> Сквален, Витамин Е, Витамин С, Незаменимые Жирные Кислоты.</p>
<p><span>Действие:</span></p>
<p><span>√</span> Эффективное увлажняющие и восстанавливающие средство с антивозрастными свойствами — идеальное дополнение к ежедневному уходу за кожей;</p>
<p><span>√</span> Уменьшает появление мелких морщин, успокаивает кожу и предотвращает раздражение;</p>
<p><span>√</span> Способствует заживлению ран, минимизируя появление шрамов;</p>
<p><span>√</span> Выравнивает текстуру кожи, осветляет и омолаживает ее;</p>
<p><span>√</span> Стимулирует синтез коллагена, укрепляет защитный барьер кожи и усиливает ее сияние.</p>
<p><span>Типы Кожи</span>: Подходит для всех типов кожи. <span>Применение</span>: Только для наружного применения. <span>Использование:</span> 2 раза в день (утром и вечером), продукт можно использовать отдельно или вместе с другими средствами по уходу за кожей. <span>Результат:</span>&nbsp;Выраженное улучшение обычно наблюдается через 3 - 4 недели. Для получения наилучших результатов следует продолжить применение средства в течение нескольких месяцев.&nbsp;</p>
`;

const oilDescriptionFr = `
<p><span>ACTIVATOR </span></p>
<p><span>HUILE REVITALISANTE</span></p>
<p><span>INDICATIONS D'UTILISATION: </span>PIGMENTATION, DESQUAMATION, RIDULES, CICATRICES D'ACNÉ, PEAU TERNE, DÉSHYDRATATION</p>
<p>Le mélange d'huiles naturelles enrichi en vitamines, squalene et acides gras essentiels est formulé pour prévenir la pigmentation, la desquamation, les ridules, les cicatrices d'acné, le teint terne et la déshydratation.</p>
<p><span>Ingrédients Actifs:</span> Squalène, Vitamine E, Vitamine C, Acides Gras Essentiels.</p>
<p><span>Action:</span></p>
<p><span>√</span> Hydratant et revitalisant efficace aux propriétés anti-âge, qui peut être un complément idéal aux soins quotidiens de la peau;</p>
<p><span>√</span> Réduit l'apparence des ridules, apaise la peau et prévient les irritations;</p>
<p><span>√</span> Favorise la cicatrisation des plaies, minimisant l’apparence des cicatrices;</p>
<p><span>√</span> Unifie la texture de la peau, l'éclaircit et la rajeunit;</p>
<p><span>√</span> Stimule la synthèse de collagène, renforce la barrière protectrice de la peau et sublime son éclat.</p>
<p><span>Types de peau:</span>&nbsp;Convient à tous les types de peau. <span>Usage:</span> Pour usage externe uniquement.</p>
<p><span>Application:</span> 2 fois par jour (matin et soir), le produit peut être utilisé seul ou avec d'autres produits de soin de la peau.</p>
<p><span>Résultat:</span> L’amélioration visible est généralement observée au bout de 3 à 4 semaines. Pour de meilleurs résultats, continuez à utiliser le produit pendant plusieurs mois.&nbsp;</p>
`;

/**/

const brighteningCreamTr = `
<p><span>EXCELSIOR</span></p>
<p><span>AYDINLATICI KREM</span></p>
<p>LEKE KARŞITI, CİLT TONU DÜZENLEYİCİ VE AYDINLATICI</p>
<p>SPF 6 (UVA/UVB KORUMASI)</p>
<p><span>KULLANIM AMAÇI:</span> DONUK CİLT, PİGMENTASYON, ÇİL, YAŞLILIK LEKELERİ, CİLT TONU EŞİTSİZLİĞİ, SİVİLCE İZLERİ, MELAZMA, GÜL HASTALIĞI (ROSACEA)</p>
<p>Cildi aydınlatmak, her türlü pigmentasyonu gidermek ve cilt tonunu eşitlemek için geliştirilmiştir.</p>
<p><span>Aktif İçerikler:</span> Traneksamik Asit, Alfa-Arbutin, Niacinamid, Azelaik Asit, Ferulik Asit.</p>
<p><span>Ek Aktif İçerikler:</span> Seramid NP, Vitamin B5, Vitamin E, Alantoin.</p>
<p><span>Nasıl Etki Eder:</span></p>
<p><span>√</span> Cilt hassasiyetini artırmayan ve tahrişe neden olmayan traneksamik asit sayesinde, tirozinaz enziminin aktivitesini inhibe ederek ve melaninin keratinositlere transferini azaltarak mevcut olan hiperpigmentasyonun düzeltilmesine ve olabilecek olan önlenmesine yardımcı olur;</p>
<p><span>√</span> Epidermal bariyeri güçlendirerek transdermal nem kaybını önler;</p>
<p><span>√</span> Damar ağının görünürlüğünü azaltır, kırılgan kılcal damarların güçlenmesine yardımcı olur;</p>
<p><span>√</span> Ciltteki kızarıklık, tahriş ve çeşitli iltihaplı süreçleri ortadan kaldırır;</p>
<p><span>√</span> Akne sonrası oluşan izleri giderir, cilt tonunu eşitler ve kaybolan ışıltıyı geri kazandırır.</p>
<p><span>Cilt Tipleri:</span> Tüm cilt tiplerine uygundur. <span>Kullanım:</span> Haricen kullanılır. <span>Uygulama:</span> Günde 2 defa (sabah ve akşam). <span>Sonuçlar:</span> Gözle görülür etki genellikle 5 ila 6 hafta sonra gözlemlenir. En iyi sonuçları elde etmek için ürünü birkaç ay kullanmaya devam edin.</p>
`;

const brighteningCreamEn = `
<p><span>EXCELSIOR </span></p>
<p><span>BRIGHTENING CREAM </span></p>
<p>ANTI-BLEMISH, SKIN TONE CORRECTOR AND BRIGHTENER</p>
<p>SPF 6 (UVA / UV PROTECTION)</p>
<p><span>INDICATIONS FOR USE:</span> DULL SKIN, PIGMENTATION, FRECKLES, AGE SPOTS, UNEVEN COMPLEXION, POST ACNE, MELASMA, ROSACEA</p>
<p>Developed to lighten skin, correct pigmentation of any origin and even out complexion.</p>
<p><span>Active Ingredients:</span> Tranexamic Acid, Alpha-Arbutin, Niacinamide, Azelaic Acid, Ferulic Acid.</p>
<p><span>Additional Active Ingredients:</span> Ceramide NP, Vitamin B5, Vitamin E, Allantoin.</p>
<p><span>Action:</span></p>
<p><span>√</span> Due to tranexamic acid, which does not increase skin sensitivity and does not cause irritation, it helps prevent and correct existing hyperpigmentation by inhibiting the activity of the tyrosinase enzyme and reducing the transfer of melanin to keratinocytes;</p>
<p><span>√</span> Strengthens the epidermal barrier, thus preventing transdermal moisture loss;</p>
<p><span>√</span> Reduces the visibility of the vascular network, helps strengthen fragile capillaries;</p>
<p><span>√</span> Eliminates redness, irritation and various inflammatory processes on the skin;</p>
<p><span>√</span> Corrects traces of post-acne, evens out skin tone and restores its lost radiance.</p>
<p><span>Types of Skin</span>: Suitable for all skin types. <span>Usage:</span> For external use only. <span>Application:</span> 2 times per day (morning and evening). <span>Result:</span> Visible improvement is usually observed in 5 - 6 weeks. For best results, continue using the product for several months.&nbsp;</p>
`;

const brighteningCreamEs = `
<p><span>EXCELSIOR</span></p>
<p><span>CREMA ACLARADORA</span></p>
<p>ANTI-IMPERFECCIONES, CORRECTOR Y ACLARADOR DEL TONO DE PIEL</p>
<p>FPS 6 (PROTECCIÓN UVA/UVB)</p>
<p>Desarrollado para aclarar la piel, corregir la pigmentación de cualquier origen y unificar el tono de la piel.</p>
<p><span>INDICACIONES DE USO: </span>PIEL APAGADA, PIGMENTACIÓN, PECAS, MANCHAS DE LA EDAD, TONO DESIGUAL DE LA PIEL, POST-ACNÉ, MELASMA, ROSÁCEA</p>
<p><span>Ingredientes Activos:</span> Ácido Tranexámico, Alfa-Arbutina, Niacinamida, Ácido Azelaico, Ácido Ferúlico.</p>
<p><span>Ingredientes Activos Adicionales: </span>Ceramida NP, Vitamina B5, Vitamina E, Alantoína.</p>
<p><span>Acción:</span></p>
<p><span>√</span> Gracias al ácido tranexámico, que no aumenta la sensibilidad de la piel ni causa irritación, ayuda a prevenir y corregir la hiperpigmentación existente al inhibir la actividad de la enzima tirosinasa y reducir la transferencia de melanina a los queratinocitos;</p>
<p><span>√</span> Fortalece la barrera epidérmica, evitando así la pérdida de humedad transdérmica;</p>
<p><span>√</span> Reduce la visibilidad de la red vascular, ayuda a fortalecer los capilares frágiles;</p>
<p><span>√</span> Elimina el enrojecimiento, la irritación y diversos procesos inflamatorios en la piel;</p>
<p><span>√</span> Corrige las cicatrices del acné, unifica el tono de la piel y recupera su luminosidad perdida.</p>
<p><span>Tipos de Piel:</span> Apto para todos tipos de piel.</p>
<p><span>Uso:</span> Sólo para uso externo. <span>Aplicación:</span> 2 veces al día (mañana y noche). <span>Resultado:</span> Generalmente se observa una mejora visible en 5 a 6 semanas. Para obtener mejores resultados, continúe usando el producto durante varios meses.&nbsp;</p>
`;

const brighteningCreamRu = `
<p><span>EXCELSIOR </span></p>
<p><span>ОСВЕТЛЯЮЩИЙ КРЕМ</span></p>
<p>КОРРЕКТОР ПИГМЕНТНЫХ ПЯТЕН, ВЫРАВНИВАНИЕ И ОСВЕТЛЕНИЕ ТОНА КОЖИ</p>
<p>SPF 6 (ЗАЩИТА ОТ UVA/UVB ЛУЧЕЙ)</p>
<p><span>ПОКАЗАНИЯ К ПРИМЕНЕНИЮ: </span>ТУСКЛАЯ КОЖА, ПИГМЕНТАЦИЯ, ВЕСНЮШКИ, ВОЗРАСТНЫЕ ПЯТНА, НЕРАВНОМЕРНЫЙ ЦВЕТ ЛИЦА, ПОСТАКНЕ, МЕЛАЗМА, РОЗАЦЕА</p>
<p>Разработан для осветления кожи, коррекции пигментных пятен любого происхождения, выравнивания цвета лица.</p>
<p><span>Активные Ингредиенты:</span> Транексамовая Кислота, Альфа-Арбутин, Ниацинамид, Азелаиновая Кислота, Феруловая Кислота.</p>
<p><span>Дополнительные Активные Ингредиенты:</span> Церамид NP, Витамин B5, Витамин E, Аллантоин.</p>
<p><span>Действие:</span></p>
<p><span>√</span> Благодаря транексамовой кислоте, которая не повышает чувствительность кожи и не вызывает раздражений, способствует предупреждению и коррекции уже имеющихся проявлений гиперпигментации за счет ингибирования активности фермента тирозиназа, снижения трансфера меланина в кератиноциты;</p>
<p><span>√</span> Укрепляет эпидермальный барьер, тем самым препятствует трансдермальной потере влаги;</p>
<p><span>√</span> Уменьшает видимость сосудистой сетки, способствует укреплению хрупких капилляров;</p>
<p><span>√</span> Устраняет покраснение, раздражение и различные воспалительные процессы на коже;</p>
<p><span>√</span> Корректирует следы постакне, выравнивает цвет кожи и возвращает ей утраченное сияние.</p>
<p><span>Типы&nbsp;Кожи:</span>&nbsp;Подходит для всех типов кожи. <span>Применение:</span>&nbsp;Только для наружного применения.</p>
<p><span>Использование:</span>&nbsp;2 раза в день (утром и вечером). <span>Результат:</span>&nbsp;Выраженное улучшение обычно наблюдается через 5 - 6 недель. Для получения наилучших результатов следует продолжить применение средства в течение нескольких месяцев.&nbsp;</p>
`;

const brighteningCreamFr = `
<p><span>EXCELSIOR</span></p>
<p><span>CRÈME ÉCLAIRCISSANTE</span></p>
<p>ANTI-IMPERFECTIONS, CORRECTEUR DE TEINT ET ÉCLAIRCISSANT</p>
<p>FPS 6 (PROTECTION UVA/UVB)</p>
<p><span>INDICATIONS D'UTILISATION:</span> PEAU TERNE, PIGMENTATION, TACHES DE ROUSSEUR, TACHES DE VIEILLESSE, TEINT IRRÉGULIER, POST-ACNÉ, MÉLASMA, ROSACÉE</p>
<p>Développé pour éclaircir la peau, corriger la pigmentation de toute origine et unifier le teint.</p>
<p><span>Ingrédients Actifs:</span> Acide Tranexamique, Alpha-Arbutine, Niacinamide, Acide Azélaïque, Acide Férulique.</p>
<p><span>Ingrédients Actifs Supplémentaires:</span> Céramide NP, Vitamine B5, Vitamine E, Allantoïne.</p>
<p><span>Action:</span></p>
<p><span>√</span> Grâce à l'acide tranexamique, qui n'augmente pas la sensibilité cutanée et ne provoque pas d'irritation, il aide à prévenir et à corriger l'hyperpigmentation existante en inhibant l'activité de l'enzyme tyrosinase et en réduisant le transfert de mélanine aux kératinocytes;</p>
<p><span>√</span> Renforce la barrière épidermique, prévenant ainsi la perte d'hydratation transdermique;</p>
<p><span>√</span> Réduit la visibilité du réseau vasculaire, aide à renforcer les capillaires fragiles;</p>
<p><span>√</span> Élimine les rougeurs, les irritations et les divers processus inflammatoires de la peau;</p>
<p><span>√</span> Corrige les marques post-acné, unifie le teint et restaure l'éclat perdu de la peau.</p>
<p><span>Types de peau:</span>&nbsp;Convient à tous les types de peau. <span>Usage:</span> Pour usage externe uniquement. <span>Application:</span> 2 fois par jour (matin et soir). <span>Résultat:</span> L’amélioration visible est généralement observée au bout de 5 à 6 semaines. Pour de meilleurs résultats, continuez à utiliser le produit pendant plusieurs mois.&nbsp;</p>
`;

/**/

const retinolNightCreamTr = `
<p><span>EXCELSIOR</span></p>
<p><span>RETİNOL GECE KREMİ</span></p>
<p><span>KULLANIM AMAÇI:</span> KIRIŞIKLIK, DİSKROMİ, PİGMENTASYON, SOLUK CİLT, YAŞLILIK LEKELERİ</p>
<p>Yaşa bağlı cilt değişiklikleri önlemek ve azaltmak için geliştirilen, kapsüllenmiş retinol içeren onarıcı ve gençleştirici gece kremi.</p>
<p><span>Aktif İçerikler:</span> Retinol, Seramid NP, Palmitoil Tripeptit-5, Ektoin.</p>
<p><span>Ek Aktif İçerikler:</span> Sakkarit İzomerat, Niacinamid, Vitamin B5, Avokado Yağı, Shea Yağı, Vitamin E, Lavanta Yağı, Alantoin.</p>
<p><span>Nasıl Etki Eder: </span></p>
<p><span>√</span> Kolajen ve elastin üretim süreçlerini aktifleştirmeye yardımcı olur;</p>
<p><span>√</span> Cildin sıkılığını ve elastikiyetini artırır, yüz tonunu eşitler ve pigmentasyonu azaltır;</p>
<p><span>√</span> Antioksidan etkiye sahiptir (serbest radikallerin etkilerini nötralize eder), erken yaşlanmayı önler;</p>
<p><span>√</span> Epidermisin gece yenilenme süreçlerini hücresel düzeyde aktifleştirir;</p>
<p><span>√</span> Cilde besleyici, yenileyici ve sıkılaştırıcı etkisi sağlar.</p>
<p><span>Cilt Tipleri:</span> Tüm cilt tiplerine uygundur. <span>Kullanım:</span> Haricen kullanılır. <span>Uygulama:</span> Sadece akşam. <span>Sonuçlar:</span> Gözle görülür etki genellikle 4 ila 6 hafta sonra gözlemlenir. En iyi sonuçları elde etmek için ürünü birkaç ay kullanmaya devam edin. &nbsp;</p>
`;

const retinolNightCreamEn = `
<p><span>EXCELSIOR</span></p>
<p><span>RETINOL NIGHT CREAM</span></p>
<p><span>INDICATIONS FOR USE:</span> WRINKLES, UNEVEN COMPLEXION, PIGMENTATION, DULLNESS, DARK SPOTS</p>
<p>Restorative, rejuvenating night cream with encapsulated retinol is developed to prevent and reduce age-related skin changes.</p>
<p><span>Active Ingredients:</span> Retinol, Ceramide NP, Palmitoyl Tripeptide-5, Ectoine. &nbsp;</p>
<p><span>Additional Active Ingredients:</span> Saccharide Isomerate, Niacinamide, Vitamin B5, Avocado Butter, Shea Butter, &nbsp;Vitamin E, Lavender Oil, Allantoin.</p>
<p><span>Action:</span></p>
<p><span>√</span> Helps activate the processes of collagen and elastin production;</p>
<p><span>√</span> Increases skin firmness and elasticity, evens out skin tone and reduces pigmentation;</p>
<p><span>√</span> Has an antioxidant effect (neutralizes the effects of free radicals), preventing premature aging;</p>
<p><span>√</span> Activates the processes of night restoration of the epidermis at the cellular level;</p>
<p><span>√</span> Has a nourishing, regenerating and tightening effect on the skin.</p>
<p><span>Types of Skin</span>: Suitable for all skin types. <span>Usage:</span> For external use only. <span>Application:</span> Only in the evening. <span>Result:</span> Visible improvement is usually observed in 4 - 6 weeks. For best results, continue using the product for several months.&nbsp;</p>
`;

const retinolNightCreamEs = `
<p><span>EXCELSIOR</span></p>
<p><span>CREMA DE NOCHE CON RETINOL</span></p>
<p><span>INDICACIONES DE USO:</span> ARRUGAS, DISCROMÍA, PIGMENTACIÓN, OPACIDAD, MANCHAS DE LA EDAD</p>
<p>Crema de noche reparadora y rejuvenecedora con retinol encapsulado, desarrollada para prevenir y reducir los cambios relacionados con la edad.</p>
<p><span>Ingredientes Activos:</span> Retinol, Ceramida NP, Palmitoil Tripéptido-5, Ectoína.</p>
<p><span>Ingredientes Activos Adicionales:</span> Isomerato de Sacárido, Niacinamida, Vitamina B5, Manteca de Aguacate, Manteca de Karité, Vitamina E, Aceite de Lavanda, Alantoína.</p>
<p><span>Acción:</span></p>
<p><span>√</span> Ayuda a activar la producción de colágeno y elastina;</p>
<p><span>√</span> Aumenta la firmeza y elasticidad de la piel, unifica el tono y reduce la pigmentación;</p>
<p><span>√</span> Tiene efecto antioxidante (neutraliza la acción de los radicales libres), previniendo el envejecimiento prematuro;</p>
<p><span>√</span> Activa los procesos de restauración nocturna de la epidermis a nivel celular;</p>
<p><span>√</span> Tiene un efecto nutritivo, regenerador y tensor sobre la piel.</p>
<p><span>Tipos de Piel:</span> Apto para todos tipos de piel. <span>Uso:</span> Sólo para uso externo. <span>Aplicación:</span> Sólo por la noche.</p>
<p><span>Resultado:</span> Generalmente se observa una mejora significativa al cabo de 4 a 6 semanas. Para obtener mejores resultados, continúe utilizando el producto durante varios meses.</p>
`;

const retinolNightCreamRu = `
<p><span>EXCELSIOR</span></p>
<p><span>НОЧНОЙ КРЕМ С РЕТИНОЛОМ</span></p>
<p><span>ПОКАЗАНИЯ К ПРИМЕНЕНИЮ:</span> МОРЩИНЫ, ДИСХРОМИЯ, ПИГМЕНТАЦИЯ, ТУСКЛОСТЬ, ВОЗРАСТНЫЕ ПЯТНА</p>
<p>Восстанавливающий и омолаживающий ночной крем с инкапсулированным ретинолом, разработан для предотвращения и уменьшения возрастных изменений.</p>
<p><span>Активные Ингредиенты:</span> Ретинол, Церамид NP, Пальмитоил Трипептид-5, Эктоин.</p>
<p><span>Дополнительные Активные Ингредиенты:</span> Изомерат Сахарида, Ниацинамид, Витамин B5, Масло Авокадо, Масло Ши, Витамин E, Масло Лаванды, Аллантоин.</p>
<p><span>Действие:</span></p>
<p><span>√</span> Способствует активизации процессов выработки коллагена и эластина;</p>
<p><span>√</span> Повышает упругость и эластичность кожи, выравнивает тон лица и устраняет пигментацию;</p>
<p><span>√</span> Оказывает антиоксидантное действие (нейтрализует действие свободных радикалов), предотвращая преждевременное старение;</p>
<p><span>√</span> Активизирует процессы ночного восстановления эпидермиса на клеточном уровне;</p>
<p><span>√</span> Оказывает питательное, регенерирующее и подтягивающее воздействие на кожу.</p>
<p><span>Типы&nbsp;Кожи:</span>&nbsp;Подходит для всех типов кожи.</p>
<p><span>Применение:</span>&nbsp;Только для наружного применения.</p>
<p><span>Использование</span><span>:</span>&nbsp;Только вечером.</p>
<p><span>Результат:</span>&nbsp;Выраженное улучшение обычно наблюдается через 4 - 6 недель. Для получения наилучших результатов следует продолжить применение средства в течение нескольких месяцев.</p>
`;

const retinolNightCreamFr = `
<p><span>EXCELSIOR</span></p>
<p><span>CRÈME DE NUIT AU RÉTINOL</span></p>
<p><span>INDICATIONS D'UTILISATION: </span>RIDES, DYSCHROMIE, PIGMENTATION, TEINT TERNE, TACHES DE VIEILLESSE</p>
<p>Crème de nuit réparatrice et rajeunissante au rétinol encapsulé, développée pour prévenir et réduire les changements liés à l'âge.</p>
<p><span>Ingrédients Actifs:</span> Rétinol, Céramide NP, Palmitoyl Tripeptide-5, Ectoïne.</p>
<p><span>Ingrédients Actifs Supplémentaires:</span> Isomérat de Saccharide, Niacinamide, Vitamine B5, Beurre d'Avocat, Beurre de Karité, Vitamine E, Huile de Lavande, Allantoïne.</p>
<p><span>Action:</span></p>
<p><span>√</span> Aide à activer la production de collagène et d'élastine;</p>
<p><span>√</span> Augmente la fermeté et l'élasticité de la peau, unifie le teint et réduit la pigmentation;</p>
<p><span>√</span> A un effet antioxydant (neutralise l'action des radicaux libres), prévenant ainsi le vieillissement prématuré;</p>
<p><span>√</span> Active les processus de restauration nocturne de l'épiderme au niveau cellulaire;</p>
<p><span>√</span> A un effet nourrissant, régénérant et tenseur sur la peau.</p>
<p><span>Types de peau:</span>&nbsp;Convient à tous les types de peau. <span>Usage:</span> Pour usage externe uniquement. <span>Application:</span> Le soir uniquement. <span>Résultat:</span> L’amélioration visible est généralement observée dans un délai de 4 à 6 semaines. Pour de meilleurs résultats, continuez à utiliser le produit pendant plusieurs mois.&nbsp;</p>
`;

/**/

const vitaminCCreamTr = `
<p><span>EXCELSIOR</span></p>
<p><span>ANTİOKSİDAN C VİTAMİNİ KREM </span></p>
<p>YAŞLANMA KARŞITI ETKİSİ &amp; UV KORUMASI</p>
<p><span>KULLANIM AMAÇI:</span> FOTOYAŞLANMA, PİGMENTASYON, YAŞA BAĞLI CİLT LEKELERİ.</p>
<p>Cildin yaşlanma süreçlerini yavaşlatmak için geliştirilmiştir. Kolajen sentezini teşvik ederek cilde doğal ışıltıyı, elastikiyeti ve sıkılığı geri kazandırır.</p>
<p><span>Aktif İçerikler:</span> Vitamin C, Vitamin E, Ferulik Asit.</p>
<p><span>Ek Aktif İçerikler:</span> Niacinamide, Skualen, Vitamin B5, Avokado Yağı, Karite Yağı, Alfa-Arbutin, Ektoin, Allantoin, Hyaluronik Asit.</p>
<p><span>Nasıl Etki Eder: </span></p>
<p><span>√</span> Fotoyaşlanma sürecini yavaşlatır ve UV radyasyonunun zararlı etkilerinin etkilerini azaltır;</p>
<p><span>√</span> Serbest radikallerle ve olumsuz çevresel etkilerle savaşarak antioksidan etki sağlar;</p>
<p><span>√</span> Melanin üretimini baskılayarak yaşlılık lekelerinin oluşumunu önler ve cilt tonunu eşitler;</p>
<p><span>√</span> Cildin yenilenme süreçlerini aktive eder, besler ve nemlendirir.</p>
<p><span>Cilt Tipleri:</span> Tüm cilt tiplerine uygundur. <span>Kullanım:</span> Haricen kullanılır. <span>Uygulama:</span> Günde 2 defa (sabah ve akşam). <span>Sonuçlar:</span> Gözle görülür etki genellikle 4 ila 6 hafta sonra gözlemlenir. En iyi sonuçları elde etmek için ürünü birkaç ay kullanmaya devam edin.</p>
`;

const vitaminCCreamEn = `
<p><span>EXCELSIOR </span></p>
<p><span>ANTIOXIDANT VITAMIN C CREAM </span></p>
<p>ANTI-AGING EFFECT &amp; UV PROTECTION</p>
<p><span>INDICATIONS FOR USE:</span> PHOTOAGING, PIGMENTATION, AGE SPOTS.</p>
<p>Developed for slowing down the skin aging process. Stimulates collagen synthesis, restores the skin’s natural radiance, elasticity and firmness.</p>
<p><span>Active Ingredients:</span> Vitamin C, Vitamin E, Ferulic Acid.</p>
<p><span>Additional Active Ingredients:</span> Niacinamide, Squalene, Vitamin B5, Avocado Butter, Shea Butter, Alpha-Arbutin, Ectoine, Allantoin, Hyaluronic Acid.</p>
<p><span>Action:</span></p>
<p><span>√</span> Slows down the process of photoaging and reduces the effects of harmful effects of UV radiation;</p>
<p><span>√</span> Provides an antioxidant effect while fighting free radicals and negative environmental influences;</p>
<p><span>√</span> Prevents the formation of age spots, evens out skin tone by suppressing the production of melanin;</p>
<p><span>√</span> Activates regeneration processes, nourishes and moisturizes.</p>
<p><span>Types of Skin</span>: Suitable for all skin types. <span>Usage:</span> For external use only. <span>Application:</span> 2 times per day (morning and evening). <span>Result:</span> Visible improvement is usually observed in 4 - 6 weeks. For best results, continue using the product for several months.</p>
`;

const vitaminCCreamEs = `
<p><span>EXCELSIOR</span></p>
<p><span>CREMA ANTIOXIDANTE CON VITAMINA C</span></p>
<p>EFECTO ANTIEDAD &amp; PROTECCIÓN UV</p>
<p><span>INDICACIONES DE USO: </span>FOTOENVEJECIMIENTO, PIGMENTACIÓN, MANCHAS DE LA EDAD.</p>
<p>Desarrollada para retardar el proceso de envejecimiento de la piel. Estimula la síntesis de colágeno, restaura la luminosidad natural, elasticidad y firmeza de la piel.</p>
<p><span>Ingredientes Activos:</span> Vitamina C, Vitamina E, Ácido Ferúlico.</p>
<p><span>Ingredientes Activos Adicionales: </span>Niacinamida, Escualeno, Vitamina B5, Manteca de Aguacate, Manteca de Karité, Alfa-Arbutina, Ectoína, Alantoína, Ácido Hialurónico.</p>
<p><span>Acción:</span></p>
<p><span>√</span> Retarda el proceso de fotoenvejecimiento y reduce los efectos nocivos de los rayos UV;</p>
<p><span>√</span> Proporciona un efecto antioxidante, combatiendo los radicales libres y el impacto negativo del medio ambiente;</p>
<p><span>√</span> Previene la formación de manchas de la edad y unifica el tono de la piel al suprimir la producción de melanina;</p>
<p><span>√</span> Activa los procesos de regeneración de la piel, nutre e hidrata.</p>
<p><span>Tipos de Piel:</span> Apto para todos tipos de piel.</p>
<p><span>Uso:</span> Sólo para uso externo. <span>Aplicación:</span> 2 veces al día (mañana y noche). <span>Resultado:</span> Generalmente se observa una mejora visible en 4 a 6 semanas. Para obtener mejores resultados, continúe usando el producto durante varios meses.&nbsp;</p>
`;

const vitaminCCreamRu = `
<p><span>EXCELSIOR </span></p>
<p><span>АНТИОКСИДАНТНЫЙ КРЕМ С ВИТАМИНОМ С </span></p>
<p>АНТИВОЗРАСТНОЙ ЭФФЕКТ И ЗАЩИТА ОТ УФ-ЛУЧЕЙ.</p>
<p><span>ПОКАЗАНИЯ К ПРИМЕНЕНИЮ:</span> ФОТОСТАРЕНИЕ, ПИГМЕНТАЦИЯ, ВОЗРАСТНЫЕ ПЯТНА.</p>
<p>Разработан для замедления процессов старения кожи. Стимулируют синтез коллагена, возвращая коже естественное сияние, упругость и подтянутость.</p>
<p><span>Активные Ингредиенты:</span> Витамин С, Витамин Е, Феруловая Кислота.</p>
<p><span>Дополнительные Активные Ингредиенты:</span> Ниацинамид, Сквалeн, Витамин B5, Масло Авокадо, Масло Ши, Альфа-Арбутин, Эктоин, Аллантоин, Гиалуроновая Кислота.</p>
<p><span>Действие:</span></p>
<p><span>√</span> Замедляет процесс фотостарения и снижает последствия вредного воздействия УФ-излучения;</p>
<p><span>√</span> Обеспечивает антиоксидантный эффект, борясь со свободными радикалами и негативным влиянием внешней среды;</p>
<p><span>√</span> Предотвращает образование пигментных пятен и выравнивает тон кожи, подавляя выработку меланина;</p>
<p><span>√</span> Активирует процессы регенерации кожи, питает и увлажняет.</p>
<p><span>Типы&nbsp;Кожи:</span>&nbsp;Подходит для всех типов кожи.</p>
<p><span>Применение:</span>&nbsp;Только для наружного применения.</p>
<p><span>Использование</span><span>:</span>&nbsp;2 раза в день (утром и вечером). <span>Результат:</span>&nbsp;Выраженное улучшение обычно наблюдается через 4 - 6 недель. Для получения наилучших результатов следует продолжить применение средства в течение нескольких месяцев.</p>
`;

const vitaminCCreamFr = `
<p><span>EXCELSIOR</span></p>
<p><span>CRÈME ANTIOXYDANTE À LA VITAMINE C</span></p>
<p>EFFET ANTI-ÂGE &amp; PROTECTION UV</p>
<p><span>INDICATIONS D'UTILISATION:</span> PHOTOVIEILLISSEMENT, PIGMENTATION, TACHES DE VIEILLESSE.</p>
<p>Développée pour ralentir le processus de vieillissement de la peau. Stimule la synthèse de collagène, restaurant l'éclat nMLaturel, l'élasticité et la fermeté de la peau.</p>
<p><span>Ingrédients Actifs:</span> Vitamine C, Vitamine E, Acide Férulique.</p>
<p><span>Ingrédients Actifs Supplémentaires:</span> Niacinamide, Squalene, Vitamine B5, Beurre d'Avocat, Beurre de Karité, Alpha-Arbutine, Ectoïne, Allantoïne, Acide Hyaluronique.</p>
<p><span>Action:</span></p>
<p><span>√</span> Ralentit le processus de photovieillissement et réduit les effets nocifs des rayons UV;</p>
<p><span>√</span> Fournit un effet antioxydant, combattant les radicaux libres et l'impact négatif de l'environnement;</p>
<p><span>√</span> Prévient la formation de taches de vieillesse et unifie le teint en supprimant la production de mélanine;</p>
<p><span>√</span> Active les processus de régénération de la peau, nourrit et hydrate.</p>
<p><span>Types de peau:</span>&nbsp;Convient à tous les types de peau.</p>
<p><span>Usage:</span> Pour usage externe uniquement.</p>
<p><span>Application:</span> 2 fois par jour (matin et soir). <span>Résultat:</span> L’amélioration visible est généralement observée au bout de 4 à 6 semaines. Pour de meilleurs résultats, continuez à utiliser le produit pendant plusieurs mois.</p>
`;

/**/

const ultraHydratingCreamTr = `
<p><span>BENEFACTOR</span></p>
<p><span>DOĞAL PREBİYOTİKLER İÇEREN ULTRA NEMLENDİRİCİ KREM</span></p>
<p><span>KULLANIM AMAÇI: </span>KURU, ÇOK KURU ve ATOPİK (PUL PUL DÖKÜLEN) CİLTLER İÇİN.</p>
<p>Uzun süreli nemlendirme etkisi ile kuru, hassas ve nemini kaybetmiş ciltler için geliştirilmiştir.</p>
<p><span>Aktif İçerikler:</span> Sakkarit İzomerat, Seramid NP, İnülin, Fruktoz, Hyaluronik Asit, Ektoin. <span>Ek Aktif İçerikler:</span> Niacinamid, Panthenol (Vitamin B5), Tokoferil Asetat (Vitamin E), Tatlı Badem Yağı, Allantoin.</p>
<p><span>Nasıl Etki Eder: </span></p>
<p><span>√</span> Cildi yoğun bir şekilde nemlendirir ve besler, dehidrasyondan korur;</p>
<p><span>√</span> Epidermisin sıkılığını ve elastikiyetini arttırır, yaşa bağlı cilt bozukluklarını önler;</p>
<p><span>√</span> Tahriş ve atopik durumları ortadan kaldırır, cildin daha pürüzsüz ve yumuşak olmasını sağlar;</p>
<p><span>√</span> Prebiyotikler cilt mikrobiyomunun dengesini onarır ve korur, koruyucu bariyerini güçlendirir ve cildin dış etkenlere karşı direncini artırır.</p>
<p><span>Cilt Tipleri:</span> Kuru, Çok Kuru, Hassas ve Atopik Ciltler. <span>Kullanım:</span> Haricen kullanılır. <span>Uygulama:</span> Günde 2 defa (sabah ve akşam). <span>Sonuçlar:</span> Gözle görülür etki genellikle 2 ila 3 hafta sonra gözlemlenir. En iyi sonuçları elde etmek için ürünü birkaç ay kullanmaya devam edin.&nbsp;</p>
`;

const ultraHydratingCreamEn = `
<p><span>BENEFACTOR</span></p>
<p><span>ULTRA HYDRATING CREAM WITH NATURAL PREBIOTICS</span></p>
<p><span>INDICATIONS FOR USE:</span> DRYNESS &amp; FLAKING, DEHYDRATED SKIN.</p>
<p>Developed for dry, sensitive and dehydrated skin with long-lasting moisturizing effect.</p>
<p><span>Active Ingredients:</span> Saccharide Isomerate, Ceramide NP, Inulin, Fructose, Hyaluronic Acid, Ectoine.</p>
<p><span>Additional Active Ingredients:</span> Niacinamide, Panthenol (Vitamin B5), Tocopheryl Acetate (Vitamin E), Sweet Almond Oil, Allantoin.</p>
<p><span>Action:</span></p>
<p><span>√</span> Intensively moisturizes and nourishes the skin, protects it from dehydration;</p>
<p><span>√</span> Increases the firmness and elasticity of the epidermis, preventing premature age-related changes;</p>
<p><span>√</span> Eliminates irritation and atopic conditions, makes the skin smoother and softer;</p>
<p><span>√</span> Prebiotics restore and maintain the balance of the skin microbiome, strengthen its protective barrier, and increase the skin's resistance to external factors.</p>
<p><span>Types of Skin</span>: Dry, Dehydrated &amp; Sensitive Skin. <span>Usage:</span> For external use only. <span>Application:</span> 2 times per day (morning and evening). <span>Result:</span> Visible improvement is usually observed in 2 - 3 weeks. For best results, continue using the product for several months.&nbsp;</p>
`;

const ultraHydratingCreamEs = `
<p><span>BENEFACTOR</span></p>
<p><span>CREMA ULTRA HIDRATANTE CON PREBIÓ</span></p>
<p><span>INDICACIONES DE USO: </span>SEQUEDAD Y DESCAMACIÓN, PIEL DESHIDRATADA.</p>
<p>Desarrollado para pieles secas, sensibles y deshidratadas con efecto hidratante duradero.</p>
<p><span>Ingredientes Activos:</span> Isomerato de Sacárido, Ceramida NP, Inulina, Fructosa, Ácido Hialurónico, Ectoína.</p>
<p><span>Ingredientes Activos Adicionales: </span>Niacinamida, Pantenol (Vitamina B5), Acetato De Tocoferilo (Vitamina E), Aceite de Almendra Dulce, Alantoína.</p>
<p><span>Acción:</span></p>
<p><span>√</span> Hidrata y nutre intensamente la piel, la protege de la deshidratación;</p>
<p><span>√</span> Aumenta la firmeza y elasticidad de la epidermis, previniendo cambios prematuros relacionados con la edad;</p>
<p><span>√</span> Elimina irritaciones y condiciones atópicas, deja la piel más tersa y suave;</p>
<p><span>√</span> Los prebióticos restauran y mantienen el equilibrio del microbioma de la piel, fortalecen su barrera protectora y aumentan la resistencia de la piel a factores externos.</p>
<p><span>Tipos de Piel:</span> Piel Seca, Deshidratada y Sensible. <span>Uso:</span> Sólo para uso externo. <span>Aplicación:</span> 2 veces al día (mañana y noche). <span>Resultado:</span> Generalmente se observa una mejora visible en 2 a 3 semanas. Para obtener mejores resultados, continúe usando el producto durante varios meses.&nbsp;</p>
`;

const ultraHydratingCreamRu = `
<p><span>BENEFACTOR</span></p>
<p><span>УЛЬТРА УВЛАЖНЯЮЩИЙ КРЕМ С НАТУРАЛЬНЫМИ ПРЕБИОТИКАМИ</span></p>
<p><span>ПОКАЗАНИЯ К ПРИМЕНЕНИЮ:</span> СУХОСТЬ И ШЕЛУШЕНИЕ, ОБЕЗВОЖЕННАЯ КОЖА.</p>
<p>Разработан для сухой, чувствительной и обезвоженной кожи с длительным увлажняющим эффектом.</p>
<p><span>Активные Ингредиенты:</span> Изомерат Сахарида, Церамид NP, Инулин, Фруктоза, Гиалуроновая Кислота, Эктоин.</p>
<p><span>Дополнительные Активные Ингредиенты:</span> Ниацинамид, Пантенол (Витамин В5), Токоферилацетат (Витамин Е),</p>
<p>Масло Сладкого Миндаля, Аллантоин.</p>
<p><span>Действие:</span></p>
<p><span>√</span> Интенсивно увлажняет и питает кожу, защищает ее от дегидратации;</p>
<p><span>√</span> Повышает упругость и эластичность эпидермиса, предупреждая преждевременные возрастные изменения;</p>
<p><span>√</span> Устраняет раздражение и атопические состояния, делает кожу более гладкой и мягкой;</p>
<p><span>√</span> Пребиотики восстанавливают и поддерживают баланс микробиома кожи, укрепляют ее защитный барьер, повышают сопротивляемость кожи внешним факторам.</p>
<p><span>Типы&nbsp;Кожи:</span>&nbsp;Сухая, обезвоженная и чувствительная кожа. <span>Применение:</span>&nbsp;Только для наружного применения.</p>
<p><span>Использование:</span>&nbsp;2 раза в день (утром и вечером). <span>Результат:</span>&nbsp;Выраженное улучшение обычно наблюдается через 2 - 3 недели. Для получения наилучших результатов следует продолжить применение средства в течение нескольких месяцев.&nbsp;</p>
`;

const ultraHydratingCreamFr = `
<p><span>BENEFACTOR</span></p>
<p><span>CRÈME ULTRA HYDRATANTE AUX PRÉBIOTIQUES NATURELS</span></p>
<p><span>INDICATIONS D'UTILISATION:</span> SÈCHÈRE &amp; DESCLARATION, PEAU DÉSHYDRATÉE.</p>
<p>Développé pour les peaux sèches, sensibles et déshydratées avec un effet hydratant longue durée.</p>
<p><span>Ingrédients Actifs:</span> Isomérat de Saccharide, Céramide NP, Inuline, Fructose, Acide Hyaluronique, Ectoïne.</p>
<p><span>Ingrédients Actifs Supplémentaires:</span> Niacinamide, Panthénol (Vitamine B5), Acétate de Tocophérol (Vitamine E),</p>
<p>Huile d’Amande Douce, Allantoïne.</p>
<p><span>Action:</span></p>
<p><span>√</span> Hydrate et nourrit intensément la peau, la protège de la déshydratation;</p>
<p><span>√</span> Augmente la fermeté et l'élasticité de l'épiderme, évitant ainsi les changements prématurés liés à l'âge;</p>
<p><span>√</span> Élimine les irritations et les conditions atopiques, rend la peau plus lisse et plus douce;</p>
<p><span>√</span> Les prébiotiques rétablissent et maintiennent l'équilibre du microbiome cutané, renforcent sa barrière protectrice et augmentent la résistance de la peau aux facteurs externes.</p>
<p><span>Types de peau:</span>&nbsp;Peaux sèches, déshydratées et sensibles. <span>Usage:</span> Pour usage externe uniquement.</p>
<p><span>Application:</span> 2 fois par jour (matin et soir). <span>Résultat:</span> L’amélioration visible est généralement observée au bout de 2 à 3 semaines. Pour de meilleurs résultats, continuez à utiliser le produit pendant plusieurs mois.</p>
`;

/**/

const creamForAcneProneSkinTr = `
<p><span>BENEFACTOR</span></p>
<p><span>AKNEYE EĞİLİMLİ CİLTLER İÇİN BAKIM KREMİ </span></p>
<p><span>KULLANIM AMAÇI: </span>AKNE, İLTİHAP, KIZARIKLIK, KOMEDONLAR, PİGMENTASYON.</p>
<p>Akneye, iltihaplanmaya, kızarıklığa, komedonlara, pigmentasyona yatkın tüm cilt tipleri için geliştirilmiştir.</p>
<p><span>Aktif İçerikler:</span> Azelaik Asit, Ferulik Asit, Ektoin, Niasinamid. <span>Ek Aktif İçerikler:</span> Vitamin B5, Vitamin E, Üzüm Çekirdeği Yağı, İnülin, Fruktoz, Biberiye Yağı, Allantoin.</p>
<p><span>Nasıl Etki Eder: </span></p>
<p><span>√</span> Antibakteriyel etkiye sahiptir (akneye neden olan Propionibacterium Acne ve Staphylococcus Epidermidis bakterilerinin büyümesini engeller);</p>
<p><span>√</span> Peeling etkisi sağlar (akne gelişiminde bir faktör olan epidermisin hiperkeratinizasyonunu azaltır);</p>
<p><span>√</span> Anti-inflamatuar özelliklere sahiptir (iltihaplanma sürecini yavaşlatır, cilt kızarıklığını giderir);</p>
<p><span>√</span> Yağ bezlerinin çalışmasını düzenler;</p>
<p><span>√</span> Sivilce lekelerinin rengini açar, cilt tonunu eşitler (melanin sentezini normalleştirerek);</p>
<p><span>√</span> Pigmentasyon azaltılmasında gözle görülür sonuçlar verir.</p>
<p><span>Cilt Tipleri:</span> Akneye, iltihaplanmaya, kızarıklığa, komedonlara, pigmentasyona eğilimli tüm cilt tipleri için uygundur. <span>Kullanım:</span> Haricen kullanılır. <span>Uygulama:</span> Günde 2 defa (sabah ve akşam).</p>
<p><span>Sonuçlar:</span> Gözle görülür etki genellikle 4 ila 6 hafta sonra gözlemlenir. En iyi sonuçları elde etmek için ürünü birkaç ay kullanmaya devam edin. <span>Öneriler:</span> Ürün içeriğinde etken maddelerden olumsuz etkilenmemek için kullanmadan önce ürünü alerjik reaksiyon açısından test etmenizi öneririz.&nbsp;</p>
`;

const creamForAcneProneSkinEn = `
<p><span>BENEFACTOR</span></p>
<p><span>CREAM FOR ACNE PRONE SKIN </span></p>
<p><span>INDICATIONS FOR USE:</span> ACNE, INFLAMMATION, REDNESS, BLACKHEADS, PIGMENTATION.</p>
<p>Developed for all skin types prone to acne, inflammation, redness, blackheads, pigmentation.</p>
<p><span>Active Ingredients:</span> Azelaic Acid, Ferulic Acid, Ectoine, Niacinamide. &nbsp;<span>Additional Active Ingredients: </span>Vitamin B5, Vitamin E, Grape Seed Oil, Inulin, Fructose, Rosemary Oil, Allantoin.</p>
<p><span>Action:</span></p>
<p><span>√</span> Has an antibacterial effect (suppresses the growth of bacteria Propionibacterium Acne and Staphylococcus Epidermidis, which cause acne);</p>
<p><span>√</span> Has an exfoliating effect (reduces hyperkeratinization of the epidermis, which is a factor in the development of acne);</p>
<p><span>√</span> Shows anti-inflammatory properties (slows down the process of inflammation, relieves skin redness);</p>
<p><span>√</span> Regulates the functioning of the sebaceous glands;</p>
<p><span>√</span> Lightens post-acne, evens out skin tone (by normalizing melanin synthesis);</p>
<p><span>√</span> Provides visible results in the correction of pigmentation.</p>
<p><span>Types of Skin</span>: Suitable for all skin types with acne, inflammation, redness, blackheads and pigmentation.&nbsp;</p>
<p><span>Usage:</span> For external use only. <span>Application:</span> 2 times per day (morning and evening). <span>Result:</span> Visible improvement is usually observed in 4 - 6 weeks. For best results, continue using the product for several months.</p>
`;

const creamForAcneProneSkinEs = `
<p><span>BENEFACTOR</span></p>
<p><span>CREMA PARA PIELES CON TENDENCIA AL ACNÉ</span></p>
<p><span>INDICACIONES DE USO: </span>ACNÉ, INFLAMACIÓN, ENROJECIMIENTO, PUNTOS NEGROS, PIGMENTACIÓN.</p>
<p>Desarrollada para todos tipos de piel con tendencia al acné, inflamación, enrojecimiento, puntos negros, pigmentación.</p>
<p><span>Ingredientes Activos: </span>Ácido Azelaico, Ácido Ferúlico, Ectoína, Niacinamida.<span> Ingredientes Activos Adicionales: </span>Vitamina B5, Vitamina E, Aceite de Semilla de Uva, Inulina, Fructosa, Aceite de Romero, Alantoína.</p>
<p><span>Acción:</span></p>
<p><span>√</span> Tiene un efecto antibacteriano (suprime el crecimiento de las bacterias Propionibacterium Acne y Staphylococcus Epidermidis, que causan el acné);</p>
<p><span>√</span> Tiene efecto exfoliante (reduce la hiperqueratinización de la epidermis, factor en el desarrollo del acné);</p>
<p><span>√</span> Presenta propiedades antiinflamatorias (ralentiza el proceso de inflamación, alivia el enrojecimiento de la piel);</p>
<p><span>√</span> Regula el funcionamiento de las glándulas sebáceas;</p>
<p><span>√</span> Aclara el post-acné, unifica el tono de la piel (normalizando la síntesis de melanina);</p>
<p><span>√</span> Da resultados visibles en la corrección de la pigmentación.</p>
<p><span>Tipos de Piel: </span>Adecuado para todos tipos de piel con tendencia al acné, inflamación, enrojecimiento, puntos negros, pigmentación.<span> Uso:</span> Sólo para uso externo. <span>Aplicación:</span> 2 veces al día (mañana y noche).</p>
<p><span>Resultado:</span> Generalmente se observa una mejora significativa después de 4 a 6 semanas. Para obtener mejores resultados, continúe usando el producto durante varios meses.</p>
`;

const creamForAcneProneSkinRu = `
<p><span>BENEFACTOR </span></p>
<p><span>КРЕМ ДЛЯ УХОДА ЗА ПРОБЛЕМНОЙ КОЖЕЙ СКЛОННОЙ К АКНЕ</span></p>
<p><span>ПОКАЗАНИЯ К ПРИМЕНЕНИЮ:</span> АКНЕ, ВОСПАЛЕНИЯ, ПОКРАСНЕНИЯ, КОМЕДОНЫ, ПИГМЕНТАЦИЯ.</p>
<p>Разработан для всех типов кожи склонной к акне, воспалениям, покраснениям, комедонам, пигментации. <span>Активные Ингредиенты:</span> Азелаиновая Кислота, Феруловая Кислота, Эктоин, Ниацинамид.</p>
<p><span>Дополнительные Активные Ингредиенты:</span> Витамин В5, Витамин Е, Масло Виноградных Косточек, Инулин, Фруктоза, Масло Розмарина, Аллантоин.</p>
<p><span>Действие</span><span>: </span></p>
<p><span>√</span> Обладает антибактериальным действием (подавляет рост бактерий Propionibacterium Acne и Staphylococcus Epidermidis, вызывающих акне);</p>
<p><span>√</span> Оказывает отшелушивающий эффект (уменьшает гиперкератинизацию эпидермиса, которая является фактором развития акне);</p>
<p><span>√</span> Проявляет противоспалительные свойства (замедляет процесс воспаления, снимает красноту кожи);</p>
<p><span>√</span> Регулирует работу сальных желез;</p>
<p><span>√</span> Осветляет постакне, выравнивает тон кожи (путем нормализации синтеза меланина);</p>
<p><span>√</span> Даёт видимый результат при коррекции пигментации.</p>
<p><span>Типы&nbsp;Кожи:</span>&nbsp;Подходит для всех типов кожи склонных к акне, воспалениям, покраснениям, комедонам, пигментации. <span>Применение:</span>&nbsp;Только для наружного применения. &nbsp;<span>Использование</span><span>:</span>&nbsp;2 раза в день (утром и вечером). <span>Результат:</span>&nbsp;Выраженное улучшение обычно наблюдается через 4 - 6 недель. Для получения наилучших результатов следует продолжить применение средства в течение нескольких месяцев.</p>
`;

const creamForAcneProneSkinFr = `
<p><span>BENEFACTOR</span></p>
<p><span>CRÈME POUR LA PEAU À TENDANCE ACNÉIQUE</span></p>
<p><span>INDICATIONS D'UTILISATION:</span> ACNÉ, INFLAMMATION, ROUGEUR, COMÉDONS, PIGMENTATION</p>
<p>Développée pour tous les types de peaux sujette à l'acné, aux inflammations, aux rougeurs, aux comédons, à la pigmentation.</p>
<p><span>Ingrédients Actifs:</span> Acide Azélaïque, Acide Férulique, Ectoïne, Niacinamide. <span>Ingrédients Actifs Supplémentaires:</span> Vitamine B5, Vitamine E, Huile de Pépins de Raisin, Inuline, Fructose, Huile de Romarin, Allantoin.</p>
<p><span>Action:</span></p>
<p><span>√</span> A un effet antibactérien (supprime la croissance des bactéries Propionibacterium Acne et Staphylococcus Epidermidis, qui causent l'acné);</p>
<p><span>√</span> A un effet exfoliant (réduit l'hyperkératinisation de l'épiderme, facteur de développement de l'acné);</p>
<p><span>√</span> Présente des propriétés anti-inflammatoires (ralentit le processus d'inflammation, soulage les rougeurs cutanées);</p>
<p><span>√</span> Régule le fonctionnement des glandes sébacées;</p>
<p><span>√</span> Éclaircit post-acné, unifie le teint (en normalisant la synthèse de mélanine);</p>
<p><span>√</span> Donne des résultats visibles dans la correction de pigmentation.</p>
<p><span>Types de peau:</span> Convient à tous les types de peau sujettes à l'acné, aux inflammations, aux rougeurs, aux comédons, à la pigmentation. <span>Usage:</span> Pour usage externe uniquement. <span>Application:</span> 2 fois par jour (matin et soir). <span>Résultat:</span> Une amélioration significative est généralement observée au bout de 4 à 6 semaines. Pour de meilleurs résultats, continuez à utiliser le produit pendant plusieurs mois.&nbsp;</p>
`;

/**/

const antiWrinkleCreamTr = `
<p><span>REJUVENATOR</span></p>
<p><span>KIRIŞIKLIK KARŞITI BAKIM KREMİ</span></p>
<p><span>KULLANIM AMAÇI: </span>CİLT ELASTİKİYETİNİN KAYBI, KIRIŞIKLIKLAR, CİLT TONU EŞİTSİZLİĞİ, PİGMENTASYON, SOLUK CİLT.</p>
<p>Yaşa bağlı değişikliklerin belirtilerini ortadan kaldırmak, kırışıklıkları azaltmak, cildin sıkılığını ve elastikiyetini artırmak için geliştirilmiştir.</p>
<p><span>Aktif İçerikler:</span> Asetil Hekzapeptid-8, Seramid NP, Palmitoil Tripeptit-5, Skualen, Ektoin, Adenozin, Palmitoil Pentapeptit-4, Palmitoil Tripeptit-1, Palmitoil Tetrapeptid-7, Hidrolize Hyaluronik Asit.</p>
<p><span>Ek Aktif İçerikler:</span> Sakkarit İzomerat, Niacinamid, B5 Vitamini, E Vitamini, Allantoin.</p>
<p><span>Nasıl Etki Eder:</span></p>
<p><span>√</span> Elastin ve kolajen sentezini uyararak kırışıklıkların derinliğini gözle görülür şekilde azaltır;</p>
<p><span>√</span> Hücrelerdeki yenilenme süreçlerini harekete geçirerek güçlendirici ve sıkılaştırıcı etki sağlar;</p>
<p><span>√</span> Cilt tonunu eşitler ve uzun süreli yoğun nemlendirme sağlar;</p>
<p><span>√</span> Cildin elastikiyetini etkili bir şekilde geri kazandırır, yaşlanma sürecini yavaşlatır;</p>
<p><span>√</span> Cildinize anında parlaklık ve sağlıklı bir ışıltı kazandırır.</p>
<p><span>Cilt Tipleri:</span> Tüm cilt türleri için. <span>Yaş:</span> 35+. <span>Kullanım:</span> Haricen kullanılır. <span>Uygulama:</span> Günde 2 defa (sabah ve akşam).</p>
<p><span>Sonuçlar:</span> Gözle görülür etki genellikle 5 ila 6 hafta sonra gözlemlenir. En iyi sonuçları elde etmek için ürünü birkaç ay kullanmaya devam edin. <span>Öneriler:</span> Ürün içeriğinde etken maddelerden olumsuz etkilenmemek için kullanmadan önce ürünü alerjik reaksiyon açısından test etmenizi öneririz.</p>
`;

const antiWrinkleCreamEn = `
<p><span>REJUVENATOR </span></p>
<p><span>ANTI-WRINKLE CREAM </span></p>
<p><span>INDICATIONS FOR USE: </span>LOSS OF SKIN ELASTICITY, WRINKLES, UNEVEN SKIN TEXTURE, PIGMENTATION, DULL COMPLEXION.</p>
<p>Developed to eliminate signs of age-related changes, reduce wrinkles, increase skin firmness and elasticity.</p>
<p><span>Active Ingredients:</span> Acetyl Hexapeptide-8, Ceramide NP, Palmitoyl Tripeptide-5, Squalene, Ectoine, Adenosine, Palmitoyl Pentapeptide-4, Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide-7, Hydrolyzed Hyaluronic Acid.</p>
<p><span>Additional Active Ingredients:</span> Saccharide Isomerate, Niacinamide, Vitamin B5, Vitamin E, Allantoin.</p>
<p><span>Action:</span></p>
<p><span>√</span> Stimulates the synthesis of elastin and collagen, significantly reducing the depth of wrinkles;</p>
<p><span>√</span> Activates regeneration processes in cells, providing a firming and lifting effect;</p>
<p><span>√</span> Evens out skin tone and provides long-lasting intensive hydration;</p>
<p><span>√</span> Effectively restores skin’s elasticity, slows down the aging process;</p>
<p><span>√</span> Provides an instant radiance and healthy glow to your skin.</p>
<p><span>Types of Skin</span>: All Skin Types. <span>Age:</span> 35+. <span>Usage:</span> For external use only. <span>Application:</span> 2 times per day (morning and evening). <span>Result:</span> Visible improvement is usually observed in 5 - 6 weeks. For best results, continue using the product for several months.</p>
`;

const antiWrinkleCreamEs = `
<p><span>REJUVENATOR</span></p>
<p><span>CREMA ANTIARRUGAS</span></p>
<p><span>INDICACIONES DE USO: </span>PÉRDIDA DE ELASTICIDAD DE LA PIEL, ARRUGAS, TONO DESIGUAL DE LA PIEL, PIGMENTACIÓN, OPACIDAD.<span> </span></p>
<p>Desarrollado para eliminar los signos de los cambios relacionados con la edad, reducir las arrugas y mejorar la firmeza y elasticidad de la piel.</p>
<p><span>Ingredientes Activos:</span> &nbsp;Acetil Hexapéptido-8, Ceramida NP, Palmitoil Tripéptido-5, Escualeno, Ectoína, Adenosina, Palmitoil Pentapéptido-4, Palmitoil Tripéptido-1, Palmitoil Tetrapéptido-7, Ácido Hialurónico Hidrolizado.</p>
<p><span>Ingredientes Activos Adicionales: </span>Isomerato de Sacárido, Niacinamida, Vitamina B5, Vitamina E, Alantoína.</p>
<p><span>Acción:</span></p>
<p><span>√</span> Estimula la síntesis de elastina y colágeno, reduciendo visiblemente la profundidad de las arrugas;</p>
<p><span>√</span> Activa los procesos de regeneración celular, proporcionando un efecto fortalecedor y tensor;</p>
<p><span>√</span> Unifica el tono de la piel y proporciona la hidratación intensiva prolongada;</p>
<p><span>√</span> Restaura eficazmente la elasticidad de la piel, ralentiza el proceso de envejecimiento;</p>
<p><span>√</span> Proporciona la luminosidad instantánea y el brillo saludable a su piel.</p>
<p><span>Tipos de Piel:</span> Apto para todos tipos de piel. <span>Edad:</span> 35+. <span>Uso:</span> Sólo para uso externo. <span>Aplicación:</span> 2 veces al día (mañana y noche). <span>Resultado:</span> Generalmente se observa una mejora visible en 5 a 6 semanas. Para obtener mejores resultados, continúe usando el producto durante varios meses.&nbsp;</p>
`;

const antiWrinkleCreamRu = `
<p><span>REJUVENATOR</span></p>
<p><span>КРЕМ ПРОТИВ МОРЩИН</span></p>
<p><span>ПОКАЗАНИЯ К ПРИМЕНЕНИЮ: </span>ПОТЕРЯ УПРУГОСТИ КОЖИ, МОРЩИНЫ, НЕОДНОРОДНЫЙ РЕЛЬЕФ КОЖИ, ПИГМЕНТАЦИЯ, ТУСКЛЫЙ ЦВЕТ ЛИЦА.</p>
<p>Создан для устранения признаков возрастных изменений, уменьшения морщин, повышения упругости и эластичности кожи.</p>
<p><span>Активные Ингредиенты:</span> Ацетилгексапептид-8, Церамид NP, Пальмитоилтрипептид-5, Сквален, Эктоин, Аденозин, Пальмитоилпентапептид-4, Пальмитоилтрипептид-1, Пальмитоилтетрапептид-7, Гидролизованная Гиалуроновая Кислота. <span>Дополнительные Активные Ингредиенты:</span> Изомерат Сахарида, Ниацинамид, Витамин B5, Витамин E, Аллантоин.</p>
<p><span>Действие:</span></p>
<p><span>√</span> Стимулирует синтез эластина и коллагена, заметно уменьшая глубину морщин;</p>
<p><span>√</span> Активизируют процессы регенерации в клетках, оказывая укрепляющий и подтягивающий эффект;</p>
<p><span>√</span> Выравнивает тон и оказывает пролонгированное интенсивное увлажнение;</p>
<p><span>√</span> Эффективно восстанавливает эластичность кожи, замедляет процессы старения;</p>
<p><span>√</span> Придает вашей коже мгновенное сияние и здоровый блеск.</p>
<p><span>Типы&nbsp;Кожи:</span>&nbsp;Для всех типов кожи. <span>Возраст:</span> 35+. <span>Применение:</span>&nbsp;Только для наружного применения.</p>
<p><span>Использование</span><span>:</span>&nbsp;2 раза в день (утром и вечером).</p>
<p><span>Результат:</span>&nbsp;Выраженное улучшение обычно наблюдается через 5 - 6 недель. Для получения наилучших результатов следует продолжить применение средства в течение нескольких месяцев.</p>
`;

const antiWrinkleCreamFr = `
<p><span>REJUVENATOR</span></p>
<p><span>CRÈME ANTI-RIDES</span></p>
<p><span>INDICATIONS D'UTILISATION: </span>PERTE D'ÉLASTICITÉ CUTANÉE, RIDES, TEINT DE PEAU IRRÉGULIER, PIGMENTATION, TEINT TERNE.</p>
<p>Développé pour éliminer les signes de changements liés à l'âge, réduire les rides, augmenter la fermeté et l'élasticité de la peau.</p>
<p><span>Ingrédients Actifs:</span> Acétyl Hexapeptide-8, Céramide NP, Palmitoyl Tripeptide-5, Squalène, Ectoïne, Adénosine, Palmitoyl Pentapeptide-4, Palmitoyl Tripeptide-1, Palmitoyl Tétrapeptide-7, Acide Hyaluronique Hydrolysé.</p>
<p><span>Ingrédients Actifs Supplémentaires:</span> Isomérat de Saccharide, Niacinamide, Vitamine B5, Vitamine E, Allantoïne.</p>
<p><span>Action:</span></p>
<p><span>√</span> Stimule la synthèse d'élastine et de collagène, réduisant visiblement la profondeur des rides;</p>
<p><span>√</span> Active les processus de régénération cellulaire, procurant un effet fortifiant et raffermissant;</p>
<p><span>√</span> Unifie le teint et procure la hydratation intense prolongée;</p>
<p><span>√</span> Restaure efficacement l'élasticité de la peau, ralentit le processus de vieillissement;</p>
<p><span>√</span> Offre la luminosité instantanée et l’éclat sain à votre peau.</p>
<p><span>Types de peau:</span>&nbsp;Pour tous les types de peau. <span>Âge: </span>35+. <span>Usage:</span> Pour usage externe uniquement.</p>
<p><span>Application:</span> 2 fois par jour (matin et soir). <span>Résultat:</span> L’amélioration visible est généralement observée au bout de 5 à 6 semaines. Pour de meilleurs résultats, continuez à utiliser le produit pendant plusieurs mois.&nbsp;</p>
`;

/**/

const eyeRepairCreamTr = `
<p><span>REJUVENATOR</span></p>
<p><span>GÖZ ÇEVRESİ ONARICI KREM </span></p>
<p><span>KULLANIM AMAÇI: </span>MOR HALKALAR, GÖZALTI TORBALAR, KIRIŞIKLIKLAR</p>
<p>Göz çevresindeki hassas ve narin cilde kapsamlı onarıcı bakım sağlamak için geliştirilmiştir.</p>
<p><span>Aktif İçerikler:</span> Palmitoyl Tripeptit-5, Asetil Hekzapeptit-8, Seramid NP, sh-Oligopeptit-1, sh-Oligopeptit-2, sh-Polipeptit-1, sh-Polipeptit-9, sh-Polipeptit-11, Sodyum Hiyaluronat, Adenozin, Palmitoyl Pentapeptit-4, Palmitoyl Tripeptit-1, Palmitoyl Tetrapeptit-7, Skualan, Ektoin, Hidrolize Hyaluronik Asit. <span>Ek Aktif İçerikler:</span> Sakkarit İzomerat, Niacinamid, Avokado Yağı, Shea Yağı, B5 Vitamini, E Vitamini, Allantoin.</p>
<p><span>Nasıl Etki Eder: </span></p>
<p><span>√</span> Kollajen sentezini uyarır, kırışıklıkların derinliğini azaltır;</p>
<p><span>√</span> Göz bölgesinde yoğun nemlendirme sağlar;</p>
<p><span>√</span> Gözaltındaki koyu halkalardan kurtulmaya yardımcı olur, şişkinliği azaltır;</p>
<p><span>√</span> Serbest radikallere ve agresif çevresel faktörlere karşı korur.</p>
<p><span>Cilt Tipleri:</span> Tüm cilt türleri için. <span>Kullanım:</span> Haricen kullanılır. <span>Uygulama:</span> Günde 2 defa (sabah ve akşam).</p>
<p><span>Sonuçlar:</span> Gözle görülür etki genellikle 4 ila 5 hafta sonra gözlemlenir. En iyi sonuçları elde etmek için ürünü birkaç ay kullanmaya devam edin.&nbsp;</p>
`;

const eyeRepairCreamEn = `
<p><span>REJUVENATOR </span></p>
<p><span>EYE CONTOUR REPAIR CREAM </span></p>
<p><span>INDICATIONS FOR USE: </span>DARK CIRCLES, PUFFINESS, WRINKLES</p>
<p>Developed for providing complex regenerating care for sensitive and delicate skin around the eyes.</p>
<p><span>Active Ingredients:</span> Palmitoyl Tripeptide-5, Acetyl Hexapeptide-8, Ceramide NP, sh-Oligopeptide-1, sh-Oligopeptide-2, sh-Polypeptide-1, sh-Polypeptide-9, sh-Polypeptide-11, Sodium Hyaluronate, Adenosine, Palmitoyl Pentapeptide-4, Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide-7, Squalene, Ectoine, Hydrolyzed Hyaluronic Acid.</p>
<p><span>Additional Active Ingredients:</span> Saccharide Isomerate, Niacinamide, Avocado Oil, Shea Butter, Vitamin B5, Vitamin E, Allantoin.</p>
<p><span>Action:</span></p>
<p><span>√</span> Stimulates collagen synthesis, significantly reducing the depth of wrinkles;</p>
<p><span>√</span> Provides intense hydration in the area around the eyes;</p>
<p><span>√</span> Helps get rid of dark circles under the eyes, reduces puffiness;</p>
<p><span>√</span> Protects against free radicals and aggressive environmental factors.</p>
<p><span>Types of Skin</span>: All Skin Types. <span>Usage:</span> For external use only. <span>Application:</span> 2 times per day (morning and evening). <span>Result:</span> Visible improvement is usually observed in 4 - 5 weeks. For best results, continue using the product for several months.&nbsp;</p>
`;

const eyeRepairCreamEs = `
<p><span>REJUVENATOR</span></p>
<p><span>CREMA REPARADORA CONTORNO DE OJOS</span></p>
<p><span>INDICACIONES DE USO: </span>OJERAS, BOLSAS, ARRUGAS</p>
<p>Desarrollado para proporcionar el cuidado regenerador complejo para la piel sensible y delicada del contorno de ojos.</p>
<p><span>Ingredientes Activos:</span> Palmitoil Tripéptido-5, Acetil Hexapéptido-8, Ceramida NP, Sh-Oligopéptido-1, Sh-Oligopéptido-2, Sh-Polipéptido-1, Sh-Polipéptido-9, Sh-Polipéptido-11, Hialuronato de Sodio, Adenosina, Palmitoil Pentapéptido-4, Palmitoil Tripéptido-1, Palmitoil Tetrapéptido-7, Escualano, Ectoína, Ácido Hialurónico Hidrolizado. <span>Ingredientes Activos Adicionales: </span>Isomerato de Sacárido, Niacinamida, Aceite de Aguacate, Manteca de Karité, Vitamina B5, Vitamina E, Alantoína.</p>
<p><span>Acción:</span></p>
<p><span>√</span> Estimula la síntesis de colágeno, reduciendo significativamente la profundidad de las arrugas;</p>
<p><span>√</span> Proporciona la hidratación intensa en el contorno de ojos;</p>
<p><span>√</span> Ayuda a eliminar las ojeras debajo de los ojos, reduce la hinchazón;</p>
<p><span>√</span> Protege contra los radicales libres y factores ambientales agresivos.</p>
<p><span>Tipos de Piel:</span> Apto para todos tipos de piel.</p>
<p><span>Uso:</span> Sólo para uso externo. <span>Aplicación:</span> 2 veces al día (mañana y noche). <span>Resultado:</span> Generalmente se observa una mejora visible en 4 a 5 semanas. Para obtener mejores resultados, continúe usando el producto durante varios meses.&nbsp;</p>
`;

const eyeRepairCreamRu = `
<p><span>REJUVENATOR</span></p>
<p><span>RU: КРЕМ ДЛЯ ВЕК И КОЖИ ВОКРУГ ГЛАЗ ВОССТАНАВЛИВАЮЩИЙ</span></p>
<p><span>ПОКАЗАНИЯ К ПРИМЕНЕНИЮ: </span>ТЕМНЫЕ КРУГИ, ОТЕКИ, МОРЩИНЫ</p>
<p>Разработан для обеспечения комплексного регенерирующего ухода за чувствительной и нежной кожей вокруг глаз. <span>Активные Ингредиенты:</span> Пальмитоил Трипептид-5, Ацетил Гексапептид-8, Церамид NP, Sh-Олигопептид-1, Sh-Олигопептид-2, Sh-Полипептид-1, Sh-Полипептид-9, Sh-Полипептид-11, Гиалуронат Натрия, Аденозин, Пальмитоил Пентапептид-4, Пальмитоил Трипептид-1, Пальмитоил Тетрапептид-7, Сквалан, Эктоин, Гидролизованная Гиалуроновая Кислота. <span>Дополнительные Активные Ингредиенты:</span> Изомерат Сахарида, Ниацинамид, Масло Авокадо, Масло Ши, Витамин B5, Витамин E, Аллантоин.</p>
<p><span>Действие:</span></p>
<p><span>√</span> Стимулирует синтез коллагена, заметно уменьшая глубину морщин;</p>
<p><span>√</span> Обеспечивает интенсивное увлажнение в области вокруг глаз;</p>
<p><span>√</span> Помогает избавиться от темных кругов под глазами, уменьшает отечность;</p>
<p><span>√</span> Защищает от действия свободных радикалов и агрессивных факторов окружающей среды.</p>
<p><span>Типы&nbsp;Кожи:</span>&nbsp;Для всех типов кожи. <span>Применение:</span>&nbsp;Только для наружного применения.</p>
<p><span>Использование:</span>&nbsp;2 раза в день (утром и вечером). <span>Результат:</span>&nbsp;Выраженное улучшение обычно наблюдается через 4 - 5 недели. Для получения наилучших результатов следует продолжить применение средства в течение нескольких месяцев.&nbsp;</p>
`;

const eyeRepairCreamFr = `
<p><span>REJUVENATOR</span></p>
<p><span>CRÈME RÉPARATRICE CONTOUR DES YEUX</span></p>
<p><span>INDICATIONS D'UTILISATION: </span>CERNES, POCHES, RIDES</p>
<p>Développé pour fournir le soin régénérant complet à la peau sensible et délicate du contour des yeux.</p>
<p><span>Ingrédients Actifs:</span> Palmitoyl Tripeptide-5, Acétyl Hexapeptide-8, Céramide NP, Sh-Oligopeptide-1, Sh-Oligopeptide-2, Sh-Polypeptide-1, Sh-Polypeptide-9, Sh-Polypeptide-11, Hyaluronate de Sodium, Adénosine, Palmitoyl Pentapeptide-4, Palmitoyl Tripeptide-1, Palmitoyl Tétrapeptide-7, Squalane, Ectoïne, Acide Hyaluronique Hydrolysé. <span>Ingrédients Actifs Supplémentaires:</span> Isomérat de Saccharide, Niacinamide, Huile d'Avocat, Beurre de Karité, Vitamine B5, Vitamine E, Allantoïne.</p>
<p><span>Action:</span></p>
<p><span>√</span> Stimule la synthèse de collagène, réduisant considérablement la profondeur des rides;</p>
<p><span>√</span> Fournit une hydratation intense dans le contour des yeux;</p>
<p><span>√</span> Aide à se débarrasser des cernes sous les yeux, réduit les poches ;</p>
<p><span>√</span> Protège contre les radicaux libres et les facteurs environnementaux agressifs.</p>
<p><span>Types de peau:</span>&nbsp;Pour tous les types de peau. <span>Usage:</span> Pour usage externe uniquement.</p>
<p><span>Application:</span> 2 fois par jour (matin et soir). <span>Résultat:</span> L’amélioration visible est généralement observée au bout de 4 à 5 semaines. Pour de meilleurs résultats, continuez à utiliser le produit pendant plusieurs mois.&nbsp;</p>
`;

/**/

export const products: Product[] = [
    {
        className: 'REVITALIZING-OIL',
        backgroundColor: '#B0845B',
        bodyColor: '#FCFAF2',
        slug: 'revitalizing-oil',
        translations: {
            tr: {title: 'CANLANDIRICI YAĞ', description: oilDescriptionTr},
            en: {title: 'REVITALIZING OIL', description: oilDescriptionEn},
            es: {title: 'ACEITE REVITALIZANTE', description: oilDescriptionEs},
            ru: {title: 'МАСЛО ДЛЯ РЕВИТАЛИЗАЦИИ КОЖИ', description: oilDescriptionRu},
            fr: {title: 'HUILE REVITALISANTE', description: oilDescriptionFr},
        },
    },
    {
        className: 'SPF6-UVA-BRIGHTENING-CREAM',
        backgroundColor: '#3CACAF',
        bodyColor: '#F5FFFF',
        slug: 'spf6uva-brightening-cream',
        translations: {
            tr: {title: 'AYDINLATICI KREM', description: brighteningCreamTr},
            en: {title: 'BRIGHTENING CREAM', description: brighteningCreamEn},
            es: {title: 'CREMA ACLARADORA', description: brighteningCreamEs},
            ru: {title: 'ОСВЕТЛЯЮЩИЙ КРЕМ', description: brighteningCreamRu},
            fr: {title: 'CRÈME ÉCLAIRCISSANTE', description: brighteningCreamFr},
        }
    },
    {
        className: 'RETINOL-NIGHT-CREAM',
        backgroundColor: '#7D2180',
        bodyColor: '#F2F0F9',
        slug: 'retinol-night-cream',
        translations: {
            tr: {title: 'RETİNOL GECE KREMİ', description: retinolNightCreamTr},
            en: {title: 'RETINOL NIGHT CREAM', description: retinolNightCreamEn},
            es: {title: 'CREMA DE NOCHE CON RETINOL', description: retinolNightCreamEs},
            ru: {title: 'НОЧНОЙ КРЕМ С РЕТИНОЛОМ', description: retinolNightCreamRu},
            fr: {title: 'CRÈME DE NUIT AU RÉTINOL', description: retinolNightCreamFr},
        }
    },
    {
        className: 'ANTIOXIDANT-VITAMIN-C-CREAM',
        backgroundColor: '#F9BA24',
        bodyColor: '#FEF4F0',
        slug: 'antioxidant-vitamin-c-cream',
        translations: {
            tr: {title: 'ANTİOKSİDAN C VİTAMİNİ KREM', description: vitaminCCreamTr},
            en: {title: 'ANTIOXIDANT VITAMIN C CREAM', description: vitaminCCreamEn},
            es: {title: 'CREMA ANTIOXIDANTE CON VITAMINA C', description: vitaminCCreamEs},
            ru: {title: 'АНТИОКСИДАНТНЫЙ КРЕМ С ВИТАМИНОМ С', description: vitaminCCreamRu},
            fr: {title: 'CRÈME ANTIOXYDANTE À LA VITAMINE C', description: vitaminCCreamFr},
        }
    },
    {
        className: 'ULTRA-HYDRATING-CREAM',
        backgroundColor: '#3E89C7',
        bodyColor: '#F3FAFF',
        slug: 'ultra-hydrating-cream',
        translations: {
            tr: {title: 'DOĞAL PREBİYOTİKLER İÇEREN ULTRA NEMLENDİRİCİ KREM', description: ultraHydratingCreamTr},
            en: {title: 'ULTRA HYDRATING CREAM WITH NATURAL PREBIOTICS', description: ultraHydratingCreamEn},
            es: {title: 'CREMA ULTRA HIDRATANTE CON PREBIÓTICOS NATURALES', description: ultraHydratingCreamEs},
            ru: {title: 'УЛЬТРА УВЛАЖНЯЮЩИЙ КРЕМ С НАТУРАЛЬНЫМИ ПРЕБИОТИКАМИ', description: ultraHydratingCreamRu},
            fr: {title: 'CRÈME ULTRA HYDRATANTE AUX PRÉBIOTIQUES NATURELS', description: ultraHydratingCreamFr},
        }
    },
    {
        className: 'CREAM-FOR-ACNE-PRONE-SKIN',
        backgroundColor: '#58B492',
        bodyColor: '#F3F9F4',
        slug: 'cream-for-acne-prone-skin',
        translations: {
            tr: {title: 'AKNEYE EĞİLİMLİ CİLTLER İÇİN BAKIM KREMİ', description: creamForAcneProneSkinTr},
            en: {title: 'CREAM FOR ACNE PRONE SKIN', description: creamForAcneProneSkinEn},
            es: {title: 'CREMA PARA PIELES CON TENDENCIA AL ACNÉ', description: creamForAcneProneSkinEs},
            ru: {title: 'КРЕМ ДЛЯ УХОДА ЗА ПРОБЛЕМНОЙ КОЖЕЙ СКЛОННОЙ К АКНЕ', description: creamForAcneProneSkinRu},
            fr: {title: 'CRÈME POUR LA PEAU À TENDANCE ACNÉİQUE', description: creamForAcneProneSkinFr},
        }
    },
    {
        className: 'ANTI-WRINKLE-CREAM',
        backgroundColor: '#B9588B',
        bodyColor: '#FEF5FA',
        slug: 'anti-wrinkle-cream',
        translations: {
            tr: {title: 'KIRIŞIKLIK KARŞITI BAKIM KREMİ', description: antiWrinkleCreamTr},
            en: {title: 'ANTI-WRINKLE CREAM', description: antiWrinkleCreamEn},
            es: {title: 'CREMA ANTIARRUGAS', description: antiWrinkleCreamEs},
            ru: {title: 'КРЕМ ПРОТИВ МОРЩИН', description: antiWrinkleCreamRu},
            fr: {title: 'CRÈME ANTI-RIDES', description: antiWrinkleCreamFr},
        }
    },
    {
        className: 'EYE-REPAIR-CREAM',
        backgroundColor: '#DB7C83',
        bodyColor: '#FCF5F6',
        slug: 'eye-repair-cream',
        translations: {
            tr: {title: 'GÖZ ÇEVRESİ ONARICI KREM', description: eyeRepairCreamTr},
            en: {title: 'EYE CONTOUR REPAIR CREAM', description: eyeRepairCreamEn},
            es: {title: 'CREMA REPARADORA CONTORNO DE OJOS', description: eyeRepairCreamEs},
            ru: {title: 'КРЕМ ДЛЯ ВЕК И КОЖИ ВОКРУГ ГЛАЗ ВОССТАНАВЛИВАЮЩИЙ', description: eyeRepairCreamRu},
            fr: {title: 'CRÈME RÉPARATRICE CONTOUR DES YEUX', description: eyeRepairCreamFr},
        }
    },
];

export default products