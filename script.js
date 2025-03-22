// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    mobileMenuButton.addEventListener('click', function() {
        const isOpen = mobileMenu.classList.contains('hidden');
        
        if (isOpen) {
            mobileMenu.classList.remove('hidden');
            menuIcon.innerHTML = `
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            `;
        } else {
            mobileMenu.classList.add('hidden');
            menuIcon.innerHTML = `
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            `;
        }
    });

    // Update copyright year
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Use cases data
    const useCases = [
        {
            icon: 'ShoppingBag',
            title: 'Retail & E-commerce',
            description: {
                automation: 'Optimize inventory management and marketing campaigns.',
                voice: 'Handle customer complaints and enable voice commerce.',
                chatbot: 'Offer product recommendations and process returns.',
                impact: 'Higher conversion rates, reduced cart abandonment, streamlined operations.'
            },
            image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800'
        },
        {
            icon: 'Plane',
            title: 'Travel & Hospitality',
            description: {
                automation: 'Streamline bookings and dynamic pricing.',
                voice: 'Manage reservations and provide travel updates.',
                chatbot: 'Share itineraries and handle cancellations.',
                impact: 'Personalized experiences, reduced wait times, increased loyalty.'
            },
            image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800'
        },
        {
            icon: 'Building2',
            title: 'Banking & Financial Services',
            description: {
                automation: 'Automate fraud detection, loan approvals, and compliance reporting.',
                voice: 'Handle account inquiries and authenticate users via voice biometrics.',
                chatbot: 'Assist with money transfers and investment guidance.',
                impact: 'Enhanced security, reduced costs, 24/7 self-service options.'
            },
            image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80&w=800'
        },
        {
            icon: 'Phone',
            title: 'Telecommunications',
            description: {
                automation: 'Automate network monitoring and service provisioning.',
                voice: 'Resolve technical issues and handle plan upgrades.',
                chatbot: 'Assist with plan comparisons and SIM activation.',
                impact: 'Faster issue resolution, reduced churn, scalable support.'
            },
            image: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?auto=format&fit=crop&q=80&w=800'
        },
        {
            icon: 'Stethoscope',
            title: 'Healthcare',
            description: {
                automation: 'Automate administrative tasks like appointment scheduling, billing, and insurance claims processing.',
                voice: 'Handle patient inquiries and provide medication reminders.',
                chatbot: 'Offer 24/7 symptom checking and mental health support.',
                impact: 'Reduced administrative burden, improved patient engagement, faster response times.'
            },
            image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
        },
        {
            icon: 'Shield',
            title: 'Insurance',
            description: {
                automation: 'Process claims and generate risk assessments.',
                voice: 'Guide customers through claims filing.',
                chatbot: 'Provide instant quotes and track claims.',
                impact: 'Faster claims processing, reduced fraud, improved retention.'
            },
            image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800'
        }
    ];

    // Render use cases
    const useCasesGrid = document.getElementById('use-cases-grid');
    useCases.forEach(useCase => {
        const useCaseElement = document.createElement('div');
        useCaseElement.className = 'group bg-zinc-800/50 rounded-xl overflow-hidden hover-scale fade-in';
        useCaseElement.innerHTML = `
            <div class="relative h-48">
                <img src="${useCase.image}" alt="${useCase.title}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                    <div class="p-3 bg-red-600/20 rounded-lg text-red-600">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            ${getIconPath(useCase.icon)}
                        </svg>
                    </div>
                </div>
            </div>
            
            <div class="p-6">
                <h3 class="text-2xl font-semibold text-white mb-4">${useCase.title}</h3>
                <div class="space-y-4">
                    <div>
                        <h4 class="text-red-500 font-medium mb-1">AI Automation</h4>
                        <p class="text-gray-300 text-sm">${useCase.description.automation}</p>
                    </div>
                    <div>
                        <h4 class="text-red-500 font-medium mb-1">AI Voice Agents</h4>
                        <p class="text-gray-300 text-sm">${useCase.description.voice}</p>
                    </div>
                    <div>
                        <h4 class="text-red-500 font-medium mb-1">AI Chatbots</h4>
                        <p class="text-gray-300 text-sm">${useCase.description.chatbot}</p>
                    </div>
                    <div class="pt-2 border-t border-zinc-700">
                        <h4 class="text-white font-medium mb-1">Impact</h4>
                        <p class="text-gray-300 text-sm">${useCase.description.impact}</p>
                    </div>
                </div>
            </div>
        `;
        useCasesGrid.appendChild(useCaseElement);
    });
});

// Helper function to get icon SVG paths
function getIconPath(icon) {
    const paths = {
        ShoppingBag: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>',
        Plane: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>',
        Building2: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>',
        Phone: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>',
        Stethoscope: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11V5a2 2 0 00-2-2H7a2 2 0 00-2 2v6m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>',
        Shield: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>'
    };
    return paths[icon] || '';
}