document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('presentation-container');
    const progressBar = document.getElementById('progress-bar');
    const slides = window.slidesData;
    
    if (!slides) {
        console.error("Slides data not found!");
        return;
    }

    const totalSlides = slides.length;

    // Helper to render section badge
    function renderBadge(section) {
        return section ? `<div class="mb-2 md:mb-3 animate-on-scroll"><span class="section-badge">${section}</span></div>` : '';
    }

    // Render corner royal accents, filigree bars & bottom right slide counter
    function renderCorners(currentIndex) {
        const paddedIndex = String(currentIndex + 1).padStart(2, '0');
        const paddedTotal = String(totalSlides).padStart(2, '0');
        return `
            <div class="slide-corner-tl"></div>
            <div class="slide-corner-tr"></div>
            <div class="slide-corner-bl"></div>
            <div class="slide-corner-br"></div>
            <div class="slide-top-bar"></div>
            <div class="slide-bottom-bar"></div>
            <div class="absolute bottom-4 right-5 z-30 text-xs font-mono font-bold tracking-widest text-royal-gold/90 bg-royal-gold/15 px-3 py-1 rounded-full border border-royal-gold/40 shadow-sm">
                ${paddedIndex} / ${paddedTotal}
            </div>
        `;
    }

    // Function to render a slide based on its type
    function renderSlide(slide, index) {
        const slideEl = document.createElement('section');
        slideEl.className = 'slide snap-start w-full relative z-10 royal-pattern';
        slideEl.id = `slide-${index}`;
        
        let bgHtml = '';
        if (slide.bgImage) {
            bgHtml = `<div class="slide-bg" style="background-image: url('${slide.bgImage}');"></div>`;
        } else {
            bgHtml = `<div class="slide-bg" style="background: radial-gradient(ellipse at 50% 40%, rgba(255, 255, 255, 0.95) 0%, rgba(247, 237, 212, 0.8) 60%, rgba(235, 217, 180, 0.9) 100%); opacity: 1;"></div>`;
        }

        let contentHtml = '';

        switch (slide.type) {
            case 'intro':
                contentHtml = `
                    ${renderBadge(slide.section)}
                    ${slide.hasLogo ? `<img src="assets/logo.png" alt="Logo" class="max-h-28 md:max-h-40 w-auto mb-4 object-contain animate-on-scroll" onerror="this.style.display='none'">` : ''}
                    <h1 class="text-4xl md:text-6xl lg:text-7xl font-serif text-center mb-4 animate-on-scroll delay-100 text-royal-dark leading-tight max-w-5xl font-bold">${slide.title}</h1>
                    <p class="text-lg md:text-2xl font-light text-royal-gray animate-on-scroll delay-200 max-w-4xl text-center mb-3">${slide.subtitle}</p>
                    <div class="gold-line delay-300"></div>
                    
                    <div class="flex flex-col items-center text-center mt-3 animate-on-scroll delay-400 space-y-3">
                        <div>
                            <span class="text-xs uppercase tracking-widest text-royal-gold font-bold block mb-1">Prepared By</span>
                            <p class="text-base md:text-xl font-serif font-semibold text-royal-dark tracking-wide">
                                ${slide.authors ? slide.authors.join('  •  ') : slide.author}
                            </p>
                        </div>
                        
                        <div class="text-xs md:text-base font-serif italic text-royal-gray pt-2 border-t border-royal-gold/30 flex flex-wrap items-center justify-center gap-3">
                            <span><strong class="text-royal-gold font-sans uppercase text-xs tracking-wider">Submitted to:</strong> ${slide.submittedTo || 'Prof. Huda Hassan'}</span>
                            <span class="text-royal-gold hidden md:inline">•</span>
                            <span><strong class="text-royal-gold font-sans uppercase text-xs tracking-wider">Program:</strong> ${slide.program || 'DPA'}</span>
                            <span class="text-royal-gold hidden md:inline">•</span>
                            <span><strong class="text-royal-gold font-sans uppercase text-xs tracking-wider">Date:</strong> ${slide.date || 'July 2026'}</span>
                        </div>
                    </div>
                `;
                break;
                
            case 'section-title':
                contentHtml = `
                    ${renderBadge(slide.section)}
                    <h2 class="text-4xl md:text-6xl lg:text-7xl font-serif text-center mb-4 animate-on-scroll text-royal-dark max-w-5xl font-bold">${slide.title}</h2>
                    <div class="gold-line delay-200"></div>
                    ${slide.subtitle ? `<p class="text-xl md:text-3xl font-light text-royal-gray animate-on-scroll delay-300 max-w-4xl text-center mt-3">${slide.subtitle}</p>` : ''}
                `;
                break;

            case 'text':
                const bulletsHtml = slide.bullets ? `
                    <div class="mt-4 md:mt-5 grid grid-cols-1 gap-3.5 max-w-6xl w-full">
                        ${slide.bullets.map((b, i) => `
                            <div class="card-glass p-4 md:p-5 lg:p-6 rounded-2xl animate-on-scroll flex items-start space-x-4 border-l-6 border-l-royal-gold w-full" style="transition-delay: ${150 + i * 100}ms">
                                <span class="w-3 h-3 rounded-full bg-royal-gold mt-1.5 flex-shrink-0"></span>
                                <p class="text-base md:text-xl lg:text-2xl text-royal-dark font-light leading-relaxed">${b}</p>
                            </div>
                        `).join('')}
                    </div>
                ` : '';

                contentHtml = `
                    ${renderBadge(slide.section)}
                    ${slide.title ? `<h3 class="text-3xl md:text-5xl font-serif text-royal-gold mb-4 animate-on-scroll text-center max-w-5xl font-semibold">${slide.title}</h3>` : ''}
                    <p class="text-2xl md:text-4xl font-light text-center max-w-5xl leading-relaxed animate-on-scroll text-royal-dark font-normal">${slide.content}</p>
                    ${bulletsHtml}
                `;
                break;

            case 'quote':
                contentHtml = `
                    ${renderBadge(slide.section)}
                    <div class="card-glass p-8 md:p-12 lg:p-14 rounded-3xl max-w-5xl w-full text-center animate-on-scroll border-2 border-royal-gold/40 shadow-xl">
                        ${slide.title ? `<h4 class="text-xs md:text-sm uppercase tracking-widest text-royal-gold mb-4 font-bold animate-on-scroll text-center">${slide.title}</h4>` : ''}
                        <blockquote class="text-2xl md:text-4xl lg:text-5xl font-serif text-center leading-relaxed italic animate-on-scroll text-royal-dark">
                            "${slide.content}"
                        </blockquote>
                        <div class="gold-line delay-200"></div>
                        ${slide.author ? `<p class="text-xl md:text-2xl font-serif text-royal-gold animate-on-scroll delay-300 text-center mt-3 font-semibold">— ${slide.author}</p>` : ''}
                        ${slide.detailText ? `<p class="text-sm md:text-lg font-light text-royal-gray animate-on-scroll delay-400 text-center max-w-3xl mx-auto mt-3 pt-3 border-t border-royal-gold/20">${slide.detailText}</p>` : ''}
                    </div>
                `;
                break;

            case 'list-revealer':
                const itemsHtml = slide.items.map((item, i) => `
                    <li class="reveal-item text-sm md:text-lg lg:text-xl font-light text-royal-dark mb-3 flex items-start card-glass p-4 md:p-5 rounded-2xl border-l-6 border-l-royal-gold w-full" style="transition-delay: ${150 + (i * 80)}ms">
                        <span class="w-3 h-3 bg-royal-gold rounded-full mr-4 mt-1.5 flex-shrink-0"></span>
                        <span class="leading-relaxed">${item}</span>
                    </li>
                `).join('');
                
                contentHtml = `
                    ${renderBadge(slide.section)}
                    <h3 class="text-3xl md:text-5xl font-serif mb-2 animate-on-scroll text-royal-dark text-center font-bold">${slide.title}</h3>
                    ${slide.subtitle ? `<p class="text-base md:text-xl font-light text-royal-gray mb-4 animate-on-scroll text-center delay-100">${slide.subtitle}</p>` : ''}
                    <ul class="max-w-6xl w-full">
                        ${itemsHtml}
                    </ul>
                `;
                break;

            case 'card':
                contentHtml = `
                    ${renderBadge(slide.section)}
                    <div class="card-glass p-8 md:p-14 lg:p-16 rounded-3xl max-w-5xl w-full text-center animate-on-scroll relative overflow-hidden border-2 border-royal-gold/45 shadow-xl">
                        ${slide.badge ? `<span class="inline-block px-5 py-2 rounded-full text-xs md:text-sm font-bold tracking-widest text-royal-gold bg-royal-gold/15 mb-5 uppercase border border-royal-gold/30">${slide.badge}</span>` : ''}
                        <h3 class="text-4xl md:text-6xl font-serif text-royal-dark mb-5 font-bold">${slide.title}</h3>
                        <p class="text-2xl md:text-4xl font-light text-royal-dark leading-relaxed mb-6">${slide.content}</p>
                        ${slide.details ? `<div class="border-t border-royal-gold/30 pt-6 text-base md:text-xl font-light text-royal-gray leading-relaxed">${slide.details}</div>` : ''}
                    </div>
                `;
                break;

            case 'case-study':
                const imageSection = slide.image ? `
                    <div class="story-image-card w-full h-full min-h-[260px] md:min-h-full animate-on-scroll">
                        <img src="${slide.image}" alt="${slide.title}" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        ${slide.badge ? `<span class="absolute bottom-4 left-4 text-xs md:text-sm font-bold tracking-wider text-white bg-royal-gold/95 px-4 py-2 rounded-full uppercase shadow-lg border border-white/20">${slide.badge}</span>` : ''}
                    </div>
                ` : '';

                contentHtml = `
                    <div class="w-full max-w-7xl px-2">
                        ${renderBadge(slide.section)}
                        <h3 class="text-3xl md:text-5xl lg:text-6xl font-serif text-royal-gold mb-4 animate-on-scroll text-center font-bold">${slide.title}</h3>
                        
                        <div class="grid grid-cols-1 ${slide.image ? 'md:grid-cols-2' : ''} gap-6 items-stretch">
                            ${imageSection}
                            <div class="flex flex-col justify-between space-y-4">
                                <div class="card-glass p-5 md:p-6 rounded-2xl animate-on-scroll delay-100 border-l-6 border-l-royal-dark flex-1 flex flex-col justify-center">
                                    <h4 class="text-xs uppercase tracking-widest text-royal-gray mb-1.5 font-bold">The Challenge</h4>
                                    <p class="text-base md:text-xl font-light leading-relaxed">${slide.challenge}</p>
                                </div>
                                <div class="card-glass p-5 md:p-6 rounded-2xl animate-on-scroll delay-200 border-l-6 border-l-royal-gold flex-1 flex flex-col justify-center">
                                    <h4 class="text-xs uppercase tracking-widest text-royal-gold mb-1.5 font-bold">The Solution</h4>
                                    <p class="text-base md:text-xl font-light leading-relaxed">${slide.solution}</p>
                                </div>
                                <div class="card-glass p-5 md:p-6 rounded-2xl animate-on-scroll delay-300 border-l-6 border-l-royal-gold bg-royal-gold/10 flex-1 flex flex-col justify-center border-t border-t-royal-gold/30">
                                    <h4 class="text-xs uppercase tracking-widest text-royal-gold mb-1 font-bold">Result</h4>
                                    <p class="text-lg md:text-2xl font-serif text-royal-dark font-semibold">${slide.result}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                break;

            case 'triple-bottom-line':
                contentHtml = `
                    <div class="w-full max-w-7xl px-2 text-center">
                        ${renderBadge(slide.section)}
                        <h3 class="text-3xl md:text-5xl lg:text-6xl font-serif text-royal-dark mb-5 animate-on-scroll font-bold">${slide.title}</h3>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                            <div class="card-glass p-6 md:p-8 rounded-3xl animate-on-scroll delay-100 flex flex-col items-center justify-between border-t-6 border-t-royal-gold border-royal-gold/40">
                                <div class="w-16 h-16 rounded-full bg-royal-gold/15 flex items-center justify-center mb-4 border-2 border-royal-gold/40 shadow-sm">
                                    <span class="text-xl font-serif text-royal-gold font-bold">People</span>
                                </div>
                                <div>
                                    <h4 class="text-2xl font-serif mb-2 text-royal-dark font-semibold">Social Impact</h4>
                                    <p class="text-base md:text-lg font-light text-royal-gray leading-relaxed">${slide.people}</p>
                                </div>
                            </div>
                            <div class="card-glass p-6 md:p-8 rounded-3xl animate-on-scroll delay-200 flex flex-col items-center justify-between border-t-6 border-t-royal-gold border-royal-gold/40">
                                <div class="w-16 h-16 rounded-full bg-royal-gold/15 flex items-center justify-center mb-4 border-2 border-royal-gold/40 shadow-sm">
                                    <span class="text-xl font-serif text-royal-gold font-bold">Planet</span>
                                </div>
                                <div>
                                    <h4 class="text-2xl font-serif mb-2 text-royal-dark font-semibold">Ecological Impact</h4>
                                    <p class="text-base md:text-lg font-light text-royal-gray leading-relaxed">${slide.planet}</p>
                                </div>
                            </div>
                            <div class="card-glass p-6 md:p-8 rounded-3xl animate-on-scroll delay-300 flex flex-col items-center justify-between border-t-6 border-t-royal-gold border-royal-gold/40">
                                <div class="w-16 h-16 rounded-full bg-royal-gold/15 flex items-center justify-center mb-4 border-2 border-royal-gold/40 shadow-sm">
                                    <span class="text-xl font-serif text-royal-gold font-bold">Profit</span>
                                </div>
                                <div>
                                    <h4 class="text-2xl font-serif mb-2 text-royal-dark font-semibold">Economic Impact</h4>
                                    <p class="text-base md:text-lg font-light text-royal-gray leading-relaxed">${slide.profit}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                break;

            case 'lesson':
                contentHtml = `
                    ${renderBadge(slide.section)}
                    <div class="text-center max-w-5xl w-full px-4 card-glass p-8 md:p-14 rounded-3xl animate-on-scroll border-2 border-royal-gold/50 shadow-xl">
                        <h4 class="text-xs md:text-sm uppercase tracking-widest text-royal-gold mb-4 font-bold">${slide.title || 'Key Lesson'}</h4>
                        <p class="text-2xl md:text-4xl lg:text-5xl font-serif italic leading-relaxed text-royal-dark mb-5">"${slide.content}"</p>
                        ${slide.details ? `<div class="border-t border-royal-gold/30 pt-5 text-base md:text-xl font-light text-royal-gray">${slide.details}</div>` : ''}
                    </div>
                `;
                break;

            case 'takeaway':
                contentHtml = `
                    <div class="card-glass p-8 md:p-12 lg:p-14 rounded-3xl max-w-5xl w-full text-center animate-on-scroll relative overflow-hidden border-2 border-royal-gold/50 shadow-2xl">
                        <div class="flex items-center justify-center space-x-4 mb-6">
                            <div class="w-14 h-14 md:w-16 md:h-16 aspect-square flex-shrink-0 rounded-full bg-gradient-to-br from-royal-gold/30 to-royal-gold/10 text-royal-gold flex items-center justify-center text-2xl md:text-3xl font-serif font-bold border-2 border-royal-gold/40 shadow-sm">
                                ${slide.number}
                            </div>
                            ${slide.section ? `<span class="section-badge">${slide.section}</span>` : ''}
                        </div>
                        <h3 class="text-3xl md:text-5xl lg:text-6xl font-serif text-royal-dark mb-6 font-bold leading-tight">${slide.title}</h3>
                        ${slide.details ? `
                            <div class="border-t-2 border-royal-gold/25 pt-6 text-lg md:text-2xl font-light text-royal-dark leading-relaxed max-w-4xl mx-auto bg-royal-gold/10 p-6 rounded-2xl border-l-6 border-l-royal-gold">
                                ${slide.details}
                            </div>
                        ` : ''}
                    </div>
                `;
                break;

            case 'outro':
                contentHtml = `
                    ${renderBadge(slide.section)}
                    <h2 class="text-4xl md:text-7xl font-serif text-center mb-4 animate-on-scroll text-royal-dark max-w-5xl font-bold">${slide.title}</h2>
                    <div class="gold-line delay-200"></div>
                    <p class="text-xl md:text-3xl font-light text-royal-gray animate-on-scroll delay-300 mt-4 uppercase tracking-widest">${slide.subtitle}</p>
                    ${slide.detailText ? `<p class="text-base md:text-xl font-serif italic text-royal-gold/90 animate-on-scroll delay-400 mt-6 max-w-2xl text-center">${slide.detailText}</p>` : ''}
                `;
                break;
        }

        slideEl.innerHTML = bgHtml + renderCorners(index) + '<div class="z-10 w-full max-h-[calc(100vh-5.5rem)] flex flex-col items-center justify-center overflow-y-auto my-auto px-4 py-2 [scrollbar-width:thin]">' + contentHtml + '</div>';
        return slideEl;
    }

    // Render all slides
    slides.forEach((slide, index) => {
        container.appendChild(renderSlide(slide, index));
    });

    // Intersection Observer for animations
    const observerOptions = {
        root: container,
        rootMargin: '0px',
        threshold: 0.45
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                
                // Update progress bar
                const slideIndex = parseInt(entry.target.id.split('-')[1]);
                const progress = ((slideIndex) / (slides.length - 1)) * 100;
                progressBar.style.width = `${progress}%`;
            }
        });
    }, observerOptions);

    document.querySelectorAll('.slide').forEach(slide => {
        observer.observe(slide);
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            container.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            e.preventDefault();
            container.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
        }
    });
});
