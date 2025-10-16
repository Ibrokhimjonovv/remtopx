import React, { useEffect, useState } from 'react';
import '../../rem-to-px/rem-to-px.scss';
import { Link } from 'react-router-dom';

const EmToPx = () => {
    const [emValue, setEmValue] = useState('1');
    const [pxValue, setPxValue] = useState('16');

    // Default parent font-size
    const parentFontSize = 16;

    useEffect(() => {
        // Title ni o'zgartirish
        document.title = "EM to PX Converter - Convert EM Units to Pixels | remtopx.vercel.app";
        
        // Description meta tag ni o'zgartirish
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.name = "description";
            document.head.appendChild(metaDescription);
        }
        metaDescription.content = "Free online tool to convert EM units to Pixels. Essential for responsive web design and CSS development with relative units.";
        
        // Keywords meta tag ni o'zgartirish
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = "keywords";
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.content = "em to px, px to em, em units to pixels, css units converter, responsive design, web development, em units";
        
        // Robots meta tag
        let metaRobots = document.querySelector('meta[name="robots"]');
        if (!metaRobots) {
            metaRobots = document.createElement('meta');
            metaRobots.name = "robots";
            document.head.appendChild(metaRobots);
        }
        metaRobots.content = "index, follow";
        
        // Open Graph meta teglari
        const ogTags = [
            { property: 'og:title', content: 'EM to PX Converter - Convert EM Units to Pixels' },
            { property: 'og:description', content: 'Free online tool to convert EM units to Pixels. Essential for responsive web design.' },
            { property: 'og:url', content: 'https://remtopx.vercel.app/em-to-px' },
            { property: 'og:type', content: 'website' }
        ];
        
        ogTags.forEach(tag => {
            let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
            if (!metaTag) {
                metaTag = document.createElement('meta');
                metaTag.setAttribute('property', tag.property);
                document.head.appendChild(metaTag);
            }
            metaTag.content = tag.content;
        });
        
        // Twitter meta teglari
        const twitterTags = [
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:title', content: 'EM to PX Converter' },
            { name: 'twitter:description', content: 'Free online tool to convert EM units to Pixels.' }
        ];
        
        twitterTags.forEach(tag => {
            let metaTag = document.querySelector(`meta[name="${tag.name}"]`);
            if (!metaTag) {
                metaTag = document.createElement('meta');
                metaTag.name = tag.name;
                document.head.appendChild(metaTag);
            }
            metaTag.content = tag.content;
        });

    }, []);

    // Convert EM to PX
    const convertEmToPx = (em) => {
        const emNum = parseFloat(em);
        if (isNaN(emNum)) return '';
        return (emNum * parentFontSize).toFixed(2).replace(/\.?0+$/, '');
    };

    // Handle EM input change
    const handleEmChange = (e) => {
        const value = e.target.value;
        setEmValue(value);

        if (value === '') {
            setPxValue('');
            return;
        }

        const pxResult = convertEmToPx(value);
        setPxValue(pxResult);
    };

    return (
        <div id='rem-to-px'>
            <div className="container">
                <h1><span>EM</span> to <span>PX</span> Converter</h1>
                <div className="inputs">
                    <div className="input">
                        <h2>EM</h2>
                        <div className="inp">
                            <input
                                type="text"
                                value={emValue}
                                onChange={handleEmChange}
                            />
                            <span>em</span>
                        </div>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                            </svg>
                        </span>
                    </div>
                    <Link to="/" className="middle-svg">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth="1.5" 
                            stroke="currentColor" 
                            className="swap-icon"
                        > 
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" 
                            /> 
                        </svg>
                    </Link>
                    <div className="input">
                        <h2>Pixels</h2>
                        <div className="inp">
                            <input
                                type="text"
                                value={pxValue}
                                readOnly
                                className="read-only"
                            />
                            <span>px</span>
                        </div>
                        <span className='a'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="result">
                    <h1>Result: <span>{pxValue}px</span></h1>
                </div>
                <p>Calculation based on a parent font-size of {parentFontSize} pixels.</p>
            </div>
        </div>
    );
};

export default EmToPx;