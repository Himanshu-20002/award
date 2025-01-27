import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


const AnimatedTitle = ({ title, containerClass }) => {

    const containerRef = React.useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const titleAnimation = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: '150 bottom',
                    end: 'center bottom',
                    scrub: 5,
                    // pinSpacing: true,
                    toggleActions: 'play none none reverse'     //to play animation in reverse at once
                }
            });

            titleAnimation.to('.animated-word', {
                opacity: 1,
                // transformOrigin: '50% 50% -150px !important',
                 transform: 'translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)',
                willChange: 'opacity, transform',
                stagger: 0.03,
                ease: 'power2.inOut'
            })
        }, containerRef)

        return () => {
            ctx.revert()

        }
    }, [])
    return (
        <div
            ref={containerRef}
            className={`animated-title ${containerClass}`}>
            {title.split('<br/>').map((line, index) => (
                <div key={index} className="flex-center max-w-full flex-wrap gap-2 item-center px-10 md:gap-3">
                    {line.split(' ').map((word, index) => (
                        <span key={index} className='animated-word'
                            dangerouslySetInnerHTML={{ __html: word }}
                        />
                    ))}

                </div>
            )
            )}
        </div>
    )
}

export default AnimatedTitle