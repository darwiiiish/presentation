const slidesData = [
  {
    type: 'intro',
    section: 'GLOBAL PERSPECTIVE',
    title: 'Why Sustainability Matters',
    subtitle: 'A Global Blueprint for Environmental, Social, and Economic Harmony',
    program: 'DPA Program',
    submittedTo: 'Prof. Huda Hassan',
    date: 'July 2026',
    authors: [
      'Amir Tadros',
      'Ayman Abass',
      'Mai Mahmoud',
      'Mamdouh Mohamed',
      'Salem Nasr',
      'Wesam Mohamed'
    ],
    hasLogo: true,
    bgImage: 'assets/forest-light.png'
  },
  {
    type: 'list-revealer',
    section: '1. INTRODUCTION',
    title: 'Interconnected Global Challenges',
    subtitle: 'For decades, economic growth was achieved at the expense of the environment across five key vectors:',
    items: [
      'Climate change: Rising global temperatures, sea level rise, and extreme volatility.',
      'Biodiversity loss: Rapid reduction of wildlife species and delicate food chains.',
      'Deforestation: Destruction of tropical rainforests and natural ecosystems.',
      'Pollution: Plastic accumulation in oceans, soil degradation, and hazardous air quality.',
      'Resource depletion: Overconsumption of fresh water, topsoil, minerals, and fossil fuels.'
    ]
  },
  {
    type: 'quote',
    section: '1. INTRODUCTION',
    title: 'The Fundamental Question',
    content: 'How can humanity continue to develop without compromising the ability of future generations to meet their own needs?',
    author: 'United Nations Brundtland Commission',
    detailText: 'This landmark inquiry reframed global development from ruthless extraction to stewardship.'
  },
  {
    type: 'section-title',
    section: 'CORE CONCEPT',
    title: 'What Is Sustainability?',
    subtitle: 'Defining the framework for long-term ecological balance and human prosperity.',
    bgImage: 'assets/forest-light.png'
  },
  {
    type: 'quote',
    section: '2. DEFINITION',
    title: 'The Universal Definition',
    content: 'Sustainability is meeting present needs without compromising the ability of future generations to meet their own needs.',
    author: 'World Commission on Environment and Development',
    detailText: 'A paradigm shift that links environmental protection directly with human development.'
  },
  {
    type: 'text',
    section: '2. DEFINITION',
    title: 'The Three Pillars of Balance',
    content: 'A truly sustainable system creates synergy across three essential dimensions.',
    bullets: [
      'Equitable social progress that empowers communities worldwide',
      'Ecological preservation that guards vital planetary boundaries',
      'Economic models that generate renewable prosperity'
    ]
  },
  {
    type: 'triple-bottom-line',
    section: 'TRIPLE BOTTOM LINE',
    title: 'The Three Dimensions of Sustainability',
    people: 'Human wellbeing, health, education, equity, and quality of life.',
    planet: 'Protecting ecosystems, biodiversity, natural resources, and climate stability.',
    profit: 'Maintaining economic growth, business success, and financial viability.'
  },
  {
    type: 'text',
    section: '2. DEFINITION',
    title: 'The Triple Bottom Line Framework',
    content: 'This framework replaces single-focused accounting with a holistic 3-P balance.',
    bullets: [
      'Pioneered by John Elkington to broaden corporate and national impact evaluation.',
      'Measures success across People, Planet, and Profit simultaneously.',
      'Proves that long-term business resilience relies on healthy ecosystems.'
    ]
  },
  {
    type: 'section-title',
    section: 'DEBUNKED MYTHS',
    title: 'The Core Challenge',
    subtitle: 'Overcoming traditional misconceptions surrounding eco-friendly economic policies.'
  },
  {
    type: 'text',
    section: '3. THE CHALLENGE',
    title: 'The Misconception of Sacrifice',
    content: 'Many people mistakenly believe that sustainability requires sacrificing economic growth.',
    bullets: [
      'A widespread narrative frames environmental protection as a direct penalty on financial returns.',
      'Critics claim green regulations stunt industrial velocity and consumer prosperity.',
      'Empirical data around the world, however, tells a drastically different story.'
    ]
  },
  {
    type: 'list-revealer',
    section: '3. THE CHALLENGE',
    title: 'Common Conventional Assumptions',
    subtitle: 'Prevalent economic myths that hinder sustainable transformation:',
    items: [
      'Environmental protection is inherently expensive and drains capital reserves.',
      'Businesses adhering to eco-standards become less competitive internationally.',
      'Transitioning to clean energy inevitably slows down overall GDP growth rates.',
      'Consumer demand prioritizing eco-products remains limited to niche markets.'
    ]
  },
  {
    type: 'quote',
    section: '3. THE CHALLENGE',
    title: 'Re-Examining Conventional Wisdom',
    content: 'Is it actually true that environmental protection slows down prosperity?',
    detailText: 'To answer this question accurately, we must analyze empirical evidence from pioneering nations and global corporations.'
  },
  {
    type: 'text',
    section: '3. THE CHALLENGE',
    title: 'Looking at Real-World Evidence',
    content: 'To answer this question, we must look at real-world evidence across nations and industries.',
    bullets: [
      'Overwhelming empirical proof demonstrates that clean technology drives economic efficiency.',
      'Countries decarbonizing their grids are enjoying lower long-term power costs.',
      'Innovative corporations adopting green tech consistently outperform market benchmarks.'
    ]
  },
  {
    type: 'section-title',
    section: 'CATALYSTS OF CHANGE',
    title: 'How Sustainability Is Achieved',
    subtitle: 'The powerful alignment of governance, technological innovation, and community action.',
    bgImage: 'assets/city-nature-light.png'
  },
  {
    type: 'text',
    section: '4. DRIVERS OF CHANGE',
    title: 'The Three Essential Drivers',
    content: 'Successful sustainability initiatives typically combine three coordinated drivers.',
    bullets: [
      'Top-down legislative guidance and economic incentive structures',
      'Cutting-edge technical solutions and circular industrial engineering',
      'Bottom-up community advocacy and grassroots consumer engagement'
    ]
  },
  {
    type: 'card',
    section: 'DRIVER 1',
    title: 'Government Policy',
    badge: 'LEGISLATION & GOVERNANCE',
    content: 'Regulations, incentives, public subsidies, and strategic long-term planning.',
    details: 'Establishes clear carbon caps, green energy subsidies, environmental protection laws, and infrastructure funding to steer market incentives toward clean choices.'
  },
  {
    type: 'card',
    section: 'DRIVER 2',
    title: 'Innovation and Technology',
    badge: 'TECHNICAL SOLUTIONS',
    content: 'Renewable energy, artificial intelligence, efficient production, and circular models.',
    details: 'Unlocks exponential efficiency gains, zero-emission transportation grids, smart grid management, and material recycling breakthroughs.'
  },
  {
    type: 'card',
    section: 'DRIVER 3',
    title: 'Organizational and Community Action',
    badge: 'GRASSROOTS ENGAGEMENT',
    content: 'Companies, local communities, conservation groups, and conscious citizens.',
    details: 'Drives market demand for green products, instills sustainable lifestyle habits, holds institutions accountable, and implements local conservation projects.'
  },
  {
    type: 'text',
    section: '4. DRIVERS OF CHANGE',
    title: 'The Synergistic Effect',
    content: 'When these three forces work together, sustainable transformation becomes inevitable.',
    bullets: [
      'Policy creates favorable economic market conditions for technical innovation.',
      'Technology provides scalable, affordable tools for communities and businesses.',
      'Community demand reinforces political will for further environmental regulation.'
    ]
  },
  {
    type: 'section-title',
    section: 'GLOBAL CASE STUDIES',
    title: 'National Sustainability Success Stories',
    subtitle: 'Nations proving that systemic ecological transformation yields immense economic prosperity.'
  },
  {
    type: 'case-study',
    section: 'NATIONAL SUCCESS',
    title: 'Case Study: Uruguay',
    badge: '98% RENEWABLE ELECTRICITY',
    image: 'assets/wind-turbines.png',
    challenge: 'Uruguay relied heavily on imported fossil fuels, making national energy prices volatile, expensive, and increasing carbon risks.',
    solution: 'The government created a multi-decade policy framework investing in wind, solar, hydroelectric, and biomass power.',
    result: 'Approximately 98% of Uruguay\'s electricity grid is generated entirely from clean renewable sources.'
  },
  {
    type: 'triple-bottom-line',
    section: 'URUGUAY IMPACT',
    title: 'Uruguay Triple Bottom Line Impact',
    people: 'Reliable, stable electricity grid reducing household utility volatility.',
    planet: 'Dramatic reduction in greenhouse gas emissions and clean air quality.',
    profit: 'Eliminated billions in fuel imports and improved national trade stability.'
  },
  {
    type: 'lesson',
    section: 'KEY TAKEAWAY',
    title: 'Lesson from Uruguay',
    content: 'Long-term government commitment can transform an entire national energy system.',
    details: 'Decisive policy alignment attracts private investment and secures long-term economic independence.'
  },
  {
    type: 'case-study',
    section: 'NATIONAL SUCCESS',
    title: 'Case Study: Costa Rica',
    badge: 'PAYMENT FOR ENVIRONMENTAL SERVICES',
    image: 'assets/costa-rica.png',
    challenge: 'Rapid uncontrolled deforestation threatened rich biodiversity, topsoil fertility, and critical rainforest biomes.',
    solution: 'Costa Rica introduced the Payment for Environmental Services (PES) program, rewarding landowners for protecting standing forests.',
    result: 'Forest coverage expanded from a historical low of 21% to over 54% of total national territory.'
  },
  {
    type: 'triple-bottom-line',
    section: 'COSTA RICA IMPACT',
    title: 'Costa Rica Triple Bottom Line Impact',
    people: 'New income opportunities for rural landowners and communities.',
    planet: 'Restoration of vital tropical rainforests, watersheds, and biodiversity.',
    profit: 'Strong eco-tourism sector supporting national economic growth.'
  },
  {
    type: 'lesson',
    section: 'KEY TAKEAWAY',
    title: 'Lesson from Costa Rica',
    content: 'Protecting nature can create economic value.',
    details: 'Assigning concrete economic value to standing natural capital aligns financial self-interest with preservation.'
  },
  {
    type: 'case-study',
    section: 'NATIONAL SUCCESS',
    title: 'Case Study: United Kingdom',
    badge: 'COMPLETE COAL PHASE-OUT',
    image: 'assets/uk-wind.png',
    challenge: 'Heavy historic reliance on coal power generation produced severe carbon pollution and atmospheric emissions.',
    solution: 'Large-scale deployment of offshore wind energy and gradual coal phase-out policies.',
    result: 'The UK completed its transition away from coal-fired electricity generation.'
  },
  {
    type: 'triple-bottom-line',
    section: 'UNITED KINGDOM IMPACT',
    title: 'United Kingdom Triple Bottom Line Impact',
    people: 'Improved air quality and public health.',
    planet: 'Significant reduction in greenhouse gas emissions.',
    profit: 'Growth of a major renewable energy industry.'
  },
  {
    type: 'lesson',
    section: 'KEY TAKEAWAY',
    title: 'Lesson from United Kingdom',
    content: 'Policy and innovation can rapidly transform national energy systems.',
    details: 'Clear phase-out signals provide industries with certainty to reallocate capital into green sectors.'
  },
  {
    type: 'section-title',
    section: 'NATURAL RECOVERY',
    title: 'Ecosystem Restoration Success Stories',
    subtitle: 'Demonstrating the astonishing resilience of natural systems when given protection and restoration.'
  },
  {
    type: 'case-study',
    section: 'ECOSYSTEM RESTORATION',
    title: 'Case Study: Yellowstone National Park',
    badge: 'TROPHIC CASCADE RESTORATION',
    image: 'assets/yellowstone.png',
    challenge: 'The removal of wolves disrupted original ecosystem balance, overgrazing vegetation.',
    solution: 'Fourteen wolves were reintroduced in 1995.',
    result: 'A trophic cascade restored ecological balance across the entire ecosystem.'
  },
  {
    type: 'triple-bottom-line',
    section: 'YELLOWSTONE IMPACT',
    title: 'Yellowstone Triple Bottom Line Impact',
    people: 'Improved ecological tourism opportunities.',
    planet: 'Recovery of vegetation, wildlife habitats, and river systems.',
    profit: 'Increased tourism revenue.'
  },
  {
    type: 'lesson',
    section: 'KEY TAKEAWAY',
    title: 'Lesson from Yellowstone',
    content: 'Small ecological interventions can create large ecosystem-wide benefits.',
    details: 'Nature possesses intrinsic regenerative balance when key biological keystone species are restored.'
  },
  {
    type: 'case-study',
    section: 'ECOSYSTEM RESTORATION',
    title: 'Case Study: Global Tiger Recovery',
    badge: 'TX2 INTERNATIONAL CONSERVATION',
    image: 'assets/tiger.png',
    challenge: 'Wild tiger populations reached historic lows due to poaching and habitat destruction.',
    solution: 'Thirteen tiger-range countries launched coordinated conservation efforts through the TX2 initiative.',
    result: 'Global tiger populations have recovered significantly from their 2010 low point.'
  },
  {
    type: 'triple-bottom-line',
    section: 'TIGER RECOVERY IMPACT',
    title: 'Global Tiger Recovery Impact',
    people: 'Stronger environmental awareness and conservation jobs.',
    planet: 'Protection of critical forest ecosystems.',
    profit: 'Increased eco-tourism opportunities.'
  },
  {
    type: 'lesson',
    section: 'KEY TAKEAWAY',
    title: 'Lesson from Tiger Recovery',
    content: 'International cooperation can reverse species decline.',
    details: 'Coordinated international policy accompanied by funding can save complex planetary ecosystems.'
  },
  {
    type: 'case-study',
    section: 'ECOSYSTEM RESTORATION',
    title: 'Case Study: Global Mangrove Restoration',
    badge: 'NATURE-BASED COASTAL DEFENSE',
    image: 'assets/mangroves.png',
    challenge: 'Mangrove forests were being destroyed by coastal development and aquaculture expansion.',
    solution: 'Large-scale restoration and protection programs.',
    result: 'Global mangrove loss rates have slowed substantially and many regions show net recovery.'
  },
  {
    type: 'triple-bottom-line',
    section: 'MANGROVE IMPACT',
    title: 'Global Mangrove Restoration Impact',
    people: 'Better protection from coastal flooding.',
    planet: 'Increased biodiversity and carbon storage.',
    profit: 'Reduced disaster recovery costs and support for fisheries.'
  },
  {
    type: 'lesson',
    section: 'KEY TAKEAWAY',
    title: 'Lesson from Mangrove Restoration',
    content: 'Nature-based solutions provide both environmental and economic benefits.',
    details: 'Natural capital investments yield dual benefits of climate adaptation and biodiversity preservation.'
  },
  {
    type: 'section-title',
    section: 'MARKET INNOVATION',
    title: 'Corporate Sustainability Success Stories',
    subtitle: 'Forward-thinking corporations demonstrating that purpose drives unparalleled enterprise value.'
  },
  /* PATAGONIA 3-SLIDE CATEGORY */
  {
    type: 'case-study',
    section: 'CORPORATE LEADERSHIP',
    title: 'Case Study: Patagonia',
    badge: 'EARTH AS SOLE SHAREHOLDER',
    image: 'assets/patagonia.png',
    challenge: 'Traditional corporate models prioritize short-term shareholder profits over environmental preservation.',
    solution: 'Patagonia transferred ownership to environmental trusts to ensure profits support environmental causes.',
    result: '100% of non-reinvested corporate profits directly fund wild conservation and climate action.'
  },
  {
    type: 'triple-bottom-line',
    section: 'PATAGONIA IMPACT',
    title: 'Patagonia Triple Bottom Line Impact',
    people: 'Support for environmental communities.',
    planet: 'Continuous funding for conservation efforts.',
    profit: 'Strong brand loyalty and long-term business resilience.'
  },
  {
    type: 'lesson',
    section: 'KEY TAKEAWAY',
    title: 'Lesson from Patagonia',
    content: 'Corporate purpose can drive both impact and profitability.',
    details: 'Uncompromising institutional purpose builds unbeatable long-term brand equity.'
  },
  /* IKEA 3-SLIDE CATEGORY */
  {
    type: 'case-study',
    section: 'CORPORATE LEADERSHIP',
    title: 'Case Study: IKEA',
    badge: 'CIRCULAR FURNITURE ECONOMY',
    image: 'assets/ikea.png',
    challenge: 'Traditional linear retail models generate high furniture waste and resource consumption.',
    solution: 'Implementation of circular economy programs, including furniture buy-back and resale initiatives.',
    result: 'Millions of home products reused, opening secondary retail revenue streams.'
  },
  {
    type: 'triple-bottom-line',
    section: 'IKEA IMPACT',
    title: 'IKEA Triple Bottom Line Impact',
    people: 'Affordable and accessible products.',
    planet: 'Reduced waste and resource consumption.',
    profit: 'New revenue streams and improved resource efficiency.'
  },
  {
    type: 'lesson',
    section: 'KEY TAKEAWAY',
    title: 'Lesson from IKEA',
    content: 'Circular economy models can benefit both business and the environment.',
    details: 'Circular design models capture lost economic value while eliminating supply chain waste.'
  },
  /* UPS 3-SLIDE CATEGORY */
  {
    type: 'case-study',
    section: 'CORPORATE LEADERSHIP',
    title: 'Case Study: UPS',
    badge: 'AI ROUTE OPTIMIZATION (ORION)',
    image: 'assets/ups-logistics.png',
    challenge: 'High fleet fuel consumption and carbon emissions from traditional logistics delivery routes.',
    solution: 'Deployment of the ORION AI route optimization system.',
    result: 'Millions of gallons of fuel saved annually through smarter logistics.'
  },
  {
    type: 'triple-bottom-line',
    section: 'UPS IMPACT',
    title: 'UPS Triple Bottom Line Impact',
    people: 'More efficient delivery services.',
    planet: 'Lower carbon emissions.',
    profit: 'Significant operational cost savings.'
  },
  {
    type: 'lesson',
    section: 'KEY TAKEAWAY',
    title: 'Lesson from UPS',
    content: 'Technology can improve both sustainability and profitability.',
    details: 'Smart technological innovation directly merges carbon reduction with major operational savings.'
  },
  /* UNILEVER 3-SLIDE CATEGORY */
  {
    type: 'case-study',
    section: 'CORPORATE LEADERSHIP',
    title: 'Case Study: Unilever',
    badge: 'SUSTAINABLE PACKAGING INITIATIVES',
    image: 'assets/unilever.png',
    challenge: 'Widespread single-use plastic packaging contributes to ocean waste and landfill pollution.',
    solution: 'Transition toward recycled plastic packaging and refillable product systems.',
    result: 'Tens of thousands of tons of virgin plastic eliminated from global consumer supply chains.'
  },
  {
    type: 'triple-bottom-line',
    section: 'UNILEVER IMPACT',
    title: 'Unilever Triple Bottom Line Impact',
    people: 'Increased consumer participation in sustainable consumption.',
    planet: 'Reduced plastic waste.',
    profit: 'Long-term packaging efficiency and brand value.'
  },
  {
    type: 'lesson',
    section: 'KEY TAKEAWAY',
    title: 'Lesson from Unilever',
    content: 'Sustainable product design can reduce environmental impact at scale.',
    details: 'Designing products for environmental stewardship drives superior consumer market growth.'
  },
  {
    type: 'section-title',
    section: 'SYNTHESIS',
    title: 'What Do All These Success Stories Have in Common?',
    subtitle: 'Analyzing the universal blueprint across nations, ecosystems, and corporate giants.'
  },
  {
    type: 'text',
    section: '8. COMMON PATTERNS',
    title: 'The Universal Transformation Pattern',
    content: 'Across countries, ecosystems, and corporations, the exact same underlying pattern appears.',
    bullets: [
      'A clear problem is identified.',
      'Long-term goals are established.',
      'Policies and innovation are applied.',
      'Progress is measured.',
      'Benefits are created for People, Planet, and Profit simultaneously.'
    ]
  },
  {
    type: 'list-revealer',
    section: '8. COMMON PATTERNS',
    title: 'The 5 Step Success Framework',
    subtitle: 'The recurring methodology behind every ecological breakthrough:',
    items: [
      '1. Clear Problem Identification: Honest baseline assessment of environmental degradation.',
      '2. Bold Long-Term Target Setting: Decisive commitments backed by legislative or corporate force.',
      '3. Policy & Tech Deployment: Combining smart governance with state-of-the-art innovation.',
      '4. Transparent Rigorous Measurement: Tracking real-world impact metrics continuously.',
      '5. Simultaneous TBL Value Creation: Generating win-win-win outcomes for People, Planet, and Profit.'
    ]
  },
  {
    type: 'section-title',
    section: 'SUMMARY',
    title: 'Key Takeaways',
    subtitle: 'Core principles derived from global sustainability evidence.'
  },
  {
    type: 'takeaway',
    number: '1',
    section: 'TAKEAWAY ONE',
    title: 'Sustainability is Real & Achievable',
    details: 'Pioneering nations and organizations have proved that complete systemic green conversion is practical and scalable today.'
  },
  {
    type: 'takeaway',
    number: '2',
    section: 'TAKEAWAY TWO',
    title: 'Sustainability Drives Economic Profitability',
    details: 'Resource efficiency, reduced waste, and clean energy directly lower operating costs and increase long-term enterprise value.'
  },
  {
    type: 'takeaway',
    number: '3',
    section: 'TAKEAWAY THREE',
    title: 'Nature is Remarkably Resilient',
    details: 'Ecosystems possess immense intrinsic self-healing capabilities when key habitats are protected and species are reintroduced.'
  },
  {
    type: 'takeaway',
    number: '4',
    section: 'TAKEAWAY FOUR',
    title: 'The Technologies & Models Already Exist',
    details: 'We possess all necessary tools today—renewable energy grids, circular supply chains, and AI logistics are mature and ready for scaling.'
  },
  {
    type: 'takeaway',
    number: '5',
    section: 'TAKEAWAY FIVE',
    title: 'Simultaneous People, Planet & Profit Alignment',
    details: 'The most enduring solutions create win-win-win value across social equity, ecological health, and financial growth.'
  },
  {
    type: 'section-title',
    section: 'CALL TO ACTION',
    title: 'Final Conclusion',
    subtitle: 'Scaling existing global solutions for future generations.'
  },
  {
    type: 'text',
    section: '10. CONCLUSION',
    title: 'Proven Real-World Proof',
    content: 'The evidence from around the world shows that sustainability is not a theoretical concept.',
    bullets: [
      'Comprehensive data spans across continents, biomes, and economic markets.',
      'Green transition is no longer a matter of opinion—it is empirical reality.',
      'Pioneers have laid the blueprint for sustainable world development.'
    ]
  },
  {
    type: 'text',
    section: '10. CONCLUSION',
    title: 'National Transformation',
    content: 'Countries are transforming their energy systems.',
    bullets: [
      'Countries like Uruguay, Costa Rica, and the UK prove grid transition is feasible.',
      'Renewable power costs have fallen below fossil fuel generation worldwide.',
      'Energy independence strengthens national defense and trade security.'
    ]
  },
  {
    type: 'text',
    section: '10. CONCLUSION',
    title: 'Ecosystem Recovery',
    content: 'Ecosystems are recovering.',
    bullets: [
      'Nature-based solutions provide storm protection, carbon storage, and biodiversity.',
      'Rewilding initiatives restore natural water networks and clean air.',
      'Protected natural biomes boost eco-tourism and local employment.'
    ]
  },
  {
    type: 'text',
    section: '10. CONCLUSION',
    title: 'Corporate Value Creation',
    content: 'Companies are creating value while reducing environmental impact.',
    bullets: [
      'Purpose-driven brands outperform standard competitors across global stock indices.',
      'Circular resource supply chains insulate businesses from commodity spikes.',
      'Eco-conscious consumers reward genuine sustainable practices with deep loyalty.'
    ]
  },
  {
    type: 'text',
    section: '10. CONCLUSION',
    title: 'The Existing Toolkit',
    content: 'The challenge is no longer discovering solutions.',
    bullets: [
      'We possess the technical, financial, and political tools necessary today.',
      'Renewable tech, circular economics, and conservation models are mature.',
      'The focus must shift from invention to rapid implementation.'
    ]
  },
  {
    type: 'text',
    section: '10. CONCLUSION',
    title: 'The Existing Solutions',
    content: 'The solutions already exist.',
    bullets: [
      'Scaling existing clean technology and circular economic models.',
      'Replicating successful policy frameworks worldwide.',
      'Mobilizing cross-sector collaboration across all levels of society.'
    ]
  },
  {
    type: 'quote',
    section: '10. CONCLUSION',
    title: 'Our Shared Responsibility',
    content: 'The challenge is scaling them faster and more broadly across the world.',
    author: 'Sustainability Imperative',
    detailText: 'The future depends on our collective determination to act swiftly and decisively.'
  },
  {
    type: 'outro',
    section: 'THANK YOU',
    title: 'Thank You',
    detailText: 'Thank you for your commitment to understanding and advancing sustainable development.'
  }
];

window.slidesData = slidesData;
