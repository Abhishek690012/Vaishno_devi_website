document.addEventListener('DOMContentLoaded', () => {

    // PRODUCT DATA
    const productDatabase = {
        
        'oil-master': {
            '100': {
                image: 'images/oil_cooled_100kva.jpg', 
                specs: [
                    { label: 'Brand', value: 'Cyber' },
                    { label: 'Power', value: '100 KVA' },
                    { label: 'Phase', value: 'Three Phase' },
                    { label: 'Cooling', value: 'Oil Immersed' },
                    { label: 'Input Voltage', value: '340V - 480V' }, 
                    { label: 'Output Voltage', value: '415V'},
                    { label: 'Frequency', value: '60Hz' },
                    { label: 'Minimum Order Quantity', value: '1 Piece' },
                    { label: 'Efficiency', value: '98%' },
                    { label: 'Surge Protection', value: 'With Surge Protection' },
                    { label: 'Material', value: 'Mild Steel'},
                    { label: 'Warranty', value: '5 Years' },
                    { label: 'Country of Origin', value: 'Made in India'},
                    { label: 'Warranty', value: '5 Years' }
                ],
                features: [
                    'Ideal for textile looms & injection molding',
                    'Superior thermal capacity for heavy loads',
                    'Robust design for harsh environments'
                ]
            },
            '150': {
                image: 'images/oil_cooled_150kva.jpg', 
                specs: [
                    { label: 'Brand', value: 'Cyber' },
                    { label: 'Power', value: '150 KVA' }, 
                    { label: 'Phase', value: 'Three Phase' },
                    { label: 'Cooling', value: 'Oil Immersed' },
                    { label: 'Input Voltage', value: '340V - 480V' },
                    { label: 'Output Voltage', value: '415V'},
                    { label: 'Frequency', value: '60Hz' },
                    { label: 'Minimum Order Quantity', value: '1 Piece' },
                    { label: 'Efficiency', value: '98%' },
                    { label: 'Surge Protection', value: 'With Surge Protection' },
                    { label: 'Material', value: 'Mild Steel'},
                    { label: 'Warranty', value: '5 Years' },
                    { label: 'Country of Origin', value: 'Made in India'},
                ],
                features: [
                    'Longer MTBF for continuous operation',
                    'Suitable for medium industrial plants',
                    'High overload tolerance via oil cooling'
                ]
            },
            '200': {
                image: 'images/oil_cooled_200kva.jpg', 
                specs: [
                    { label: 'Brand', value: 'Cyber' },
                    { label: 'Power', value: '200 KVA' }, 
                    { label: 'Phase', value: 'Three Phase' },
                    { label: 'Cooling', value: 'Oil Immersed' },
                    { label: 'Input Voltage', value: '340V - 480V' },
                    { label: 'Output Voltage', value: '415V'},
                    { label: 'Frequency', value: '60Hz' },
                    { label: 'Minimum Order Quantity', value: '1 Piece' },
                    { label: 'Efficiency', value: '98%' },
                    { label: 'Surge Protection', value: 'With Surge Protection' },
                    { label: 'Material', value: 'Mild Steel'},
                    { label: 'Warranty', value: '5 Years' },
                    { label: 'Country of Origin', value: 'Made in India'},
                ],
                features: [
                    'Excellent vibration dampening (low noise)',
                    'Suitable for hospital main feeds',
                    'High regulation accuracy (±1%)'
                ]
            },
            '250': {
                image: 'images/oil_cooled_200kva.jpg', 
                specs: [
                    { label: 'Brand', value: 'Cyber' },
                    { label: 'Power', value: '250 KVA' }, // Fixed power label
                    { label: 'Phase', value: 'Three Phase' },
                    { label: 'Cooling', value: 'Oil Immersed' },
                    { label: 'Input Voltage', value: '340V - 480V' },
                    { label: 'Output Voltage', value: '415V'},
                    { label: 'Frequency', value: '60Hz' },
                    { label: 'Minimum Order Quantity', value: '1 Piece' },
                    { label: 'Efficiency', value: '98%' },
                    { label: 'Surge Protection', value: 'With Surge Protection' },
                    { label: 'Material', value: 'Mild Steel'},
                    { label: 'Warranty', value: '5 Years' },
                    { label: 'Country of Origin', value: 'Made in India'},
                ],
                features: [
                    'Designed for heavy rolling mills',
                    'Zero waveform distortion',
                    'Oil bath cooling for windings'
                ]
            },
            '300': {
                image: 'images/oil_cooled_200kva.jpg', 
                specs: [
                    { label: 'Brand', value: 'Cyber' },
                    { label: 'Power', value: '300 KVA' }, // Fixed power label
                    { label: 'Phase', value: 'Three Phase' },
                    { label: 'Cooling', value: 'Oil Immersed' },
                    { label: 'Input Voltage', value: '340V - 480V' },
                    { label: 'Output Voltage', value: '415V'},
                    { label: 'Frequency', value: '60Hz' },
                    { label: 'Minimum Order Quantity', value: '1 Piece' },
                    { label: 'Efficiency', value: '98%' },
                    { label: 'Surge Protection', value: 'With Surge Protection' },
                    { label: 'Material', value: 'Mild Steel'},
                    { label: 'Warranty', value: '5 Years' },
                    { label: 'Country of Origin', value: 'Made in India'},
                ],
                features: [
                    'Ideal for chemical plant sections',
                    'Digital PLC/Servo control systems',
                    'Handles frequent load spikes safely'
                ]
            },
            '350': {
                image: 'images/oil_cooled_200kva.jpg', 
                specs: [
                    { label: 'Brand', value: 'Cyber' },
                    { label: 'Power', value: '350 KVA' }, // Fixed power label
                    { label: 'Phase', value: 'Three Phase' },
                    { label: 'Cooling', value: 'Oil Immersed' },
                    { label: 'Input Voltage', value: '340V - 480V' },
                    { label: 'Output Voltage', value: '415V'},
                    { label: 'Frequency', value: '60Hz' },
                    { label: 'Minimum Order Quantity', value: '1 Piece' },
                    { label: 'Efficiency', value: '98%' },
                    { label: 'Surge Protection', value: 'With Surge Protection' },
                    { label: 'Material', value: 'Mild Steel'},
                    { label: 'Warranty', value: '5 Years' },
                    { label: 'Country of Origin', value: 'Made in India'},
                ],
                features: [
                    'Ideal for large datacenter chillers',
                    'Robust protection against phase failure',
                    'High thermal stability for continuous use'
                ]
            },
            '400': {
                image: 'images/oil_cooled_200kva.jpg', 
                specs: [
                    { label: 'Brand', value: 'Cyber' },
                    { label: 'Power', value: '400 KVA' }, // Fixed power label
                    { label: 'Phase', value: 'Three Phase' },
                    { label: 'Cooling', value: 'Oil Immersed' },
                    { label: 'Input Voltage', value: '340V - 480V' },
                    { label: 'Output Voltage', value: '415V'},
                    { label: 'Frequency', value: '60Hz' },
                    { label: 'Minimum Order Quantity', value: '1 Piece' },
                    { label: 'Efficiency', value: '98%' },
                    { label: 'Surge Protection', value: 'With Surge Protection' },
                    { label: 'Material', value: 'Mild Steel'},
                    { label: 'Warranty', value: '5 Years' },
                    { label: 'Country of Origin', value: 'Made in India'},
                ],
                features: [
                    'Central plant distribution ready',
                    'Oil cooling reduces thermal stress',
                    'Superior short-circuit protection'
                ]
            },
            '450': {
                image: 'images/oil_cooled_200kva.jpg', 
                specs: [
                    { label: 'Brand', value: 'Cyber' },
                    { label: 'Power', value: '450 KVA' }, // Fixed power label
                    { label: 'Phase', value: 'Three Phase' },
                    { label: 'Cooling', value: 'Oil Immersed' },
                    { label: 'Input Voltage', value: '340V - 480V' },
                    { label: 'Output Voltage', value: '415V'},
                    { label: 'Frequency', value: '60Hz' },
                    { label: 'Minimum Order Quantity', value: '1 Piece' },
                    { label: 'Efficiency', value: '98%' },
                    { label: 'Surge Protection', value: 'With Surge Protection' },
                    { label: 'Material', value: 'Mild Steel'},
                    { label: 'Warranty', value: '5 Years' },
                    { label: 'Country of Origin', value: 'Made in India'},
                ],
                features: [
                    'Designed for large process plants',
                    'Radiators for effective heat dissipation',
                    'Suitable for mission-critical loads'
                ]
            },
            '500': {
                image: 'images/oil_cooled_200kva.jpg', 
                specs: [
                    { label: 'Brand', value: 'Cyber' },
                    { label: 'Power', value: '500 KVA' }, // Fixed power label
                    { label: 'Phase', value: 'Three Phase' },
                    { label: 'Cooling', value: 'Oil Immersed' },
                    { label: 'Input Voltage', value: '340V - 480V' },
                    { label: 'Output Voltage', value: '415V'},
                    { label: 'Frequency', value: '60Hz' },
                    { label: 'Minimum Order Quantity', value: '1 Piece' },
                    { label: 'Efficiency', value: '98%' },
                    { label: 'Surge Protection', value: 'With Surge Protection' },
                    { label: 'Material', value: 'Mild Steel'},
                    { label: 'Warranty', value: '5 Years' },
                    { label: 'Country of Origin', value: 'Made in India'},
                ],
                features: [
                    'Primary feed for campus-scale sites',
                    'Digital display with full diagnostics',
                    'Maximum durability for 24/7 loads'
                ]
            }
        },

        // --- THREE PHASE (AIR) DATA ---
        'air-master': {
            '10': {
                image: 'images/air_cooled_10kva.jpg',
                specs: [
                    { label: 'Minimum Order Quantity', value: '1' },
                    { label: 'Brand', value: 'Cyber' },
                    { label: 'Power', value: '10 KVA' },
                    { label: 'Phase', value: 'Three Phase' },
                    { label: 'Cooling', value: 'Air Cooled' },
                    { label: 'Efficiency', value: '98%' },
                    { label: 'Ambient Temperature', value: '45° Celsius'},
                    { label: 'Surge Protection', value: 'With Surge Protection' },
                    { label: 'Frequency', value: '60 Hz' },
                    { label: 'Automation Grade', value: 'Automatic' },
                    { label: 'Correction Speed', value: '> 35V/sec' },
                    { label: 'Warranty', value: '1 Year' },
                    { label: 'Country of Origin', value: 'Made in India' }
                ],
                features: [
                    'Compact design for medical labs',
                    'Low maintenance (no oil)',
                    'Fast response (<10ms)'
                ]
            },
            '15': {
                image: 'images/air_cooled_10kva.jpg',
                specs: [
                    { label: 'Minimum Order Quantity', value: '1' },
                    { label: 'Brand', value: 'Cyber' },
                    { label: 'Power', value: '15 KVA' },
                    { label: 'Phase', value: 'Three Phase' },
                    { label: 'Cooling', value: 'Air Cooled' },
                    { label: 'Efficiency', value: '98%' },
                    { label: 'Ambient Temperature', value: '45° Celsius'},
                    { label: 'Surge Protection', value: 'With Surge Protection' },
                    { label: 'Frequency', value: '60 Hz' },
                    { label: 'Automation Grade', value: 'Automatic' },
                    { label: 'Correction Speed', value: '> 35V/sec' },
                    { label: 'Warranty', value: '1 Year' },
                    { label: 'Country of Origin', value: 'Made in India' }
                ],
                features: [
                    'Ideal for retail & small servers',
                    'Micro-controller precision ±1%',
                    'Natural air cooled architecture'
                ]
            },
            '20': {
                image: 'images/air_cooled_10kva.jpg',
                specs: [
                    { label: 'Minimum Order Quantity', value: '1' },
                    { label: 'Brand', value: 'Cyber' },
                    { label: 'Power', value: '20 KVA' },
                    { label: 'Phase', value: 'Three Phase' },
                    { label: 'Cooling', value: 'Air Cooled' },
                    { label: 'Efficiency', value: '98%' },
                    { label: 'Ambient Temperature', value: '45° Celsius'},
                    { label: 'Surge Protection', value: 'With Surge Protection' },
                    { label: 'Frequency', value: '60 Hz' },
                    { label: 'Automation Grade', value: 'Automatic' },
                    { label: 'Correction Speed', value: '> 35V/sec' },
                    { label: 'Warranty', value: '1 Year' },
                    { label: 'Country of Origin', value: 'Made in India' }
                ],
                features: [
                    'Perfect for restaurant HVAC systems',
                    'Wide input voltage range capability',
                    'Lower weight & easier indoor siting'
                ]
            },
            '25': {
                image: 'images/air_cooled_10kva.jpg',
                specs: [

                    { label: 'Minimum Order Quantity', value: '1' },
                    { label: 'Brand', value: 'Cyber' },
                    { label: 'Power', value: '25 KVA' },
                    { label: 'Phase', value: 'Three Phase' },
                    { label: 'Cooling', value: 'Air Cooled' },
                    { label: 'Efficiency', value: '98%' },
                    { label: 'Ambient Temperature', value: '45° Celsius'},
                    { label: 'Surge Protection', value: 'With Surge Protection' },
                    { label: 'Frequency', value: '60 Hz' },
                    { label: 'Automation Grade', value: 'Automatic' },
                    { label: 'Correction Speed', value: '> 35V/sec' },
                    { label: 'Warranty', value: '1 Year' },
                    { label: 'Country of Origin', value: 'Made in India' }
                ],
                features: [
                    'Cost-effective for small CNCs',
                    'High efficiency > 98%',
                    'Quick installation in tight spaces'
                ]
            },
            '30': {
                image: 'images/air_cooled_10kva.jpg',
                specs: [
                    { label: 'Minimum Order Quantity', value: '1' },
                    { label: 'Brand', value: 'Cyber' },
                    { label: 'Power', value: '30 KVA' },
                    { label: 'Phase', value: 'Three Phase' },
                    { label: 'Material', value: 'Mild Steel' },
                    { label: 'Cooling', value: 'Air Cooled' },
                    { label: 'Control Type', value: 'Digital Controller' },
                    // { label: 'Efficiency', value: '98%' },
                    // { label: 'Ambient Temperature', value: '45° Celsius'},
                    // { label: 'Surge Protection', value: 'With Surge Protection' },
                    { label: 'Frequency', value: '60 Hz' },
                    { label: 'Output Voltage', value: '415V' },
                    { label: 'Automation Grade', value: 'Automatic' },
                    // { label: 'Correction Speed', value: '> 35V/sec' },
                    { label: 'Warranty', value: '1 Year' },
                    { label: 'Mounting Type', value: 'Floor' },
                    { label: 'Country of Origin', value: 'Made in India' }
                ],
                features: [
                    'Suitable for telecom racks',
                    'Micro-controller based circuit',
                    'Handles office voltage swings'
                ]
            },
            '40': {
                image: 'images/air_cooled_10kva.jpg',
                specs: [
                    { label: 'Minimum Order Quantity', value: '1' },
                    { label: 'Brand', value: 'Cyber' },
                    { label: 'Power', value: '40 KVA' },
                    { label: 'Phase', value: 'Three Phase' },
                    { label: 'Cooling', value: 'Air Cooled' },
                    { label: 'Efficiency', value: '99%' },
                    { label: 'Material', value: 'Mild Steel' },
                    // { label: 'Ambient Temperature', value: '45° Celsius'},
                    { label: 'Surge Protection', value: 'With Surge Protection' },
                    { label: 'Frequency', value: '60 Hz' },
                    { label: 'Automation Grade', value: 'Automatic' },
                    { label: 'Correction Speed', value: '> 40V/sec' },
                    // { label: 'Warranty', value: '1 Year' },
                    { label: 'Country of Origin', value: 'Made in India' }
                ],
                features: [
                    'Forced air cooling with fans',
                    'Ideal for printing & packaging',
                    'Fast response to load changes'
                ]
            },
            '45': {
                image: 'images/air_cooled_10kva.jpg',
                specs: [
                    { label: 'Minimum Order Quantity', value: '1' },
                    { label: 'Brand', value: 'Cyber' },
                    { label: 'Power', value: '45 KVA' },
                    { label: 'Phase', value: 'Three Phase' },
                    { label: 'Cooling', value: 'Air Cooled' },
                    { label: 'Efficiency', value: '98%' },
                    { label: 'Ambient Temperature', value: '45° Celsius'},
                    { label: 'Surge Protection', value: 'With Surge Protection' },
                    { label: 'Frequency', value: '60 Hz' },
                    { label: 'Automation Grade', value: 'Automatic' },
                    { label: 'Correction Speed', value: '> 35V/sec' },
                    { label: 'Warranty', value: '1 Year' },
                    { label: 'Country of Origin', value: 'Made in India' }
                ],
                features: [
                    'Ideal for medium manufacturing lines',
                    'Digital LCD display with alarms',
                    'Overload & short-circuit protection'
                ]
            },
            '50': {
                image: 'images/air_cooled_10kva.jpg',
                specs: [
                    { label: 'Minimum Order Quantity', value: '1' },
                    { label: 'Brand', value: 'Cyber' },
                    { label: 'Power', value: '50 KVA' },
                    { label: 'Phase', value: 'Three Phase' },
                    { label: 'Cooling', value: 'Air Cooled' },
                    { label: 'Efficiency', value: '98%' },
                    { label: 'Ambient Temperature', value: '45° Celsius'},
                    { label: 'Surge Protection', value: 'With Surge Protection' },
                    { label: 'Frequency', value: '60 Hz' },
                    { label: 'Automation Grade', value: 'Automatic' },
                    { label: 'Correction Speed', value: '> 35V/sec' },
                    { label: 'Warranty', value: '1 Year' },
                    { label: 'Country of Origin', value: 'Made in India' }
                ],
                features: [
                    'Suitable for medical device suites',
                    'Higher continuous current capacity',
                    'Ventilated enclosure for heat management'
                ]
            },
            '60': {
                image: 'images/air_cooled_10kva.jpg',
                specs: [
                    { label: 'Minimum Order Quantity', value: '1' },
                    { label: 'Brand', value: 'Cyber' },
                    { label: 'Power', value: '60 KVA' },
                    { label: 'Phase', value: 'Three Phase' },
                    { label: 'Cooling', value: 'Air Cooled' },
                    { label: 'Efficiency', value: '98%' },
                    { label: 'Ambient Temperature', value: '45° Celsius'},
                    { label: 'Surge Protection', value: 'With Surge Protection' },
                    { label: 'Frequency', value: '60 Hz' },
                    { label: 'Automation Grade', value: 'Automatic' },
                    { label: 'Correction Speed', value: '> 35V/sec' },
                    { label: 'Warranty', value: '1 Year' },
                    { label: 'Country of Origin', value: 'Made in India' }
                ],
                features: [
                    'Excellent for medium data centers',
                    'Fast voltage correction speed',
                    'Protection against phase sequence errors'
                ]
            },
            '75': {
                image: 'images/air_cooled_10kva.jpg',
                specs: [
                    { label: 'Minimum Order Quantity', value: '1' },
                    { label: 'Brand', value: 'Cyber' },
                    { label: 'Power', value: '75 KVA' },
                    { label: 'Phase', value: 'Three Phase' },
                    { label: 'Cooling', value: 'Air Cooled' },
                    { label: 'Efficiency', value: '98%' },
                    { label: 'Ambient Temperature', value: '45° Celsius'},
                    { label: 'Surge Protection', value: 'With Surge Protection' },
                    { label: 'Frequency', value: '60 Hz' },
                    { label: 'Automation Grade', value: 'Automatic' },
                    { label: 'Correction Speed', value: '> 35V/sec' },
                    { label: 'Warranty', value: '1 Year' },
                    { label: 'Country of Origin', value: 'Made in India' }
                ],
                features: [
                    'Ideal for cold-storage compressor banks',
                    'Micro-controller regulated output',
                    'Automatic bypass option included'
                ]
            },
            '90': {
                image: 'images/air_cooled_10kva.jpg',
                specs: [
                    { label: 'Minimum Order Quantity', value: '1' },
                    { label: 'Brand', value: 'Cyber' },
                    { label: 'Power', value: '90 KVA' },
                    { label: 'Phase', value: 'Three Phase' },
                    { label: 'Cooling', value: 'Air Cooled' },
                    { label: 'Efficiency', value: '98%' },
                    { label: 'Ambient Temperature', value: '45° Celsius'},
                    { label: 'Surge Protection', value: 'With Surge Protection' },
                    { label: 'Frequency', value: '60 Hz' },
                    { label: 'Automation Grade', value: 'Automatic' },
                    { label: 'Correction Speed', value: '> 35V/sec' },
                    { label: 'Warranty', value: '1 Year' },
                    { label: 'Country of Origin', value: 'Made in India' }
                ],
                features: [
                    'Suitable for commercial building feeders',
                    'High capacity forced air cooling',
                    'Cost-effective large load solution'
                ]
            },
            '100': {
                image: 'images/air_cooled_10kva.jpg',
                specs: [
                    { label: 'Minimum Order Quantity', value: '1' },
                    { label: 'Brand', value: 'Cyber' },
                    { label: 'Power', value: '100 KVA' },
                    { label: 'Phase', value: 'Three Phase' },
                    { label: 'Cooling', value: 'Air Cooled' },
                    { label: 'Efficiency', value: '98%' },
                    { label: 'Ambient Temperature', value: '45° Celsius'},
                    { label: 'Surge Protection', value: 'With Surge Protection' },
                    { label: 'Frequency', value: '60 Hz' },
                    { label: 'Automation Grade', value: 'Automatic' },
                    { label: 'Correction Speed', value: '> 35V/sec' },
                    { label: 'Warranty', value: '1 Year' },
                    { label: 'Country of Origin', value: 'Made in India' }
                ],
                features: [
                    'Ideal for large server rooms',
                    'Less maintenance than oil-cooled units',
                    'Comprehensive thermal protection'
                ]
            }
        },

        //SINGLE PHASE 
        'iso-master': {
            '1': {
                image: 'images/single_phase_1kva.jpg',
                specs: [
                    { label: 'Brand', value: 'Cyber' },
                    { label: 'Power', value: '1 KVA' },
                    { label: 'Phase', value: 'Single Phase' },
                    { label: 'Cooling', value: 'Air Cooled' },
                    { label: 'Input Voltage', value: '170V - 270V' },
                    { label: 'Warranty', value: '1 Year' }
                ],
                features: [
                    'Perfect for home appliances',
                    'Wall mountable design',
                    'Silent operation'
                ]
            }

        }
    };


    // BUTTON ORDER
    const masterConfig = {
        'oil-master': {
            baseTitle: 'Oil Cooled Servo',
            gridId: 'grid-oil',
            variants: [100, 150,200,250,300,350,400,450,500,] 
        },
        'air-master': {
            baseTitle: 'Three Phase Servo',
            gridId: 'grid-air',
            variants: [10, 15, 20, 25, 30, 40, 45, 50, 60, 75, 90, 100]
        },
        'iso-master': {
            baseTitle: 'Single Phase Servo',
            gridId: 'grid-iso',
            variants: [1]
        }
    };


    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('.variant-grid')) return;
            card.classList.toggle('expanded');
        });
    });


    const sections = document.querySelectorAll('.product-category');
    const navLinks = document.querySelectorAll('.p-nav-link');
    const headerHeight = 80;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`.p-nav-link[href="#${id}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    }, { rootMargin: `-${headerHeight + 20}px 0px -50% 0px` });

    sections.forEach(section => observer.observe(section));


    Object.keys(masterConfig).forEach(cardId => {
        const config = masterConfig[cardId];
        const card = document.getElementById(cardId);
        const grid = document.getElementById(config.gridId);
        
        // Safety Check: If HTML elements are missing, skip
        if (!card || !grid) return;

        const titleEl = card.querySelector('.pc-title');
        const imgEl = card.querySelector('.pc-image img');
        const tableBody = card.querySelector('.specs-table tbody');
        const featureList = card.querySelector('.features-list ul');

        // Function: Update the UI with data from productDatabase
        const updateCard = (val) => {
            // Fetch real data
            const data = productDatabase[cardId][String(val)];

            // Fallback if data is missing for a variant
            if (!data) {
                console.error(`Missing data for ${cardId} variant ${val}`);
                return;
            }
            
            // 1. Update Title
            titleEl.textContent = `${data.specs.find(s => s.label === 'Power').value} ${config.baseTitle}`;
            
            // 2. Update Image
            imgEl.classList.add('loading');
            imgEl.src = data.image;
            imgEl.onload = () => imgEl.classList.remove('loading');
            // If image fails to load, keep old one or show placeholder
            imgEl.onerror = () => { imgEl.classList.remove('loading'); console.warn(`Image not found: ${data.image}`); };

            // 3. Update Table
            tableBody.innerHTML = data.specs.map(spec => 
                `<tr><th>${spec.label}</th><td>${spec.value}</td></tr>`
            ).join('');

            // 4. Update Features
            featureList.innerHTML = data.features.map(feat => 
                `<li>${feat}</li>`
            ).join('');
        };

        config.variants.forEach((val, index) => {
            const btn = document.createElement('button');
            btn.classList.add('variant-btn');
            btn.textContent = val;
            if (index === 0) btn.classList.add('active'); 

            btn.addEventListener('click', (e) => {
                e.stopPropagation(); 
                grid.querySelectorAll('.variant-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                updateCard(val);
            });

            grid.appendChild(btn);
        });

        // Load Default (First Item)
        if (config.variants.length > 0) {
            updateCard(config.variants[0]);
        }
    });
});