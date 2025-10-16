import React, { useState, useEffect } from 'react';
import './rem-to-px.scss';
import { Link } from 'react-router-dom';

const RemToPx = () => {
    const [remValue, setRemValue] = useState('1');
    const [pxValue, setPxValue] = useState('16');
    const [result, setResult] = useState('16px');

    // Default root font-size
    const rootFontSize = 16;

    // Meta teglarni o'rnatish
    useEffect(() => {
        // Title ni o'zgartirish
        document.title = "Rem to Px Converter - Convert CSS Units Easily | remtopx.vercel.app";

        // Description meta tag ni o'zgartirish
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.name = "description";
            document.head.appendChild(metaDescription);
        }
        metaDescription.content = "Free online tool to convert REM units to Pixels and vice versa. Essential for responsive web design and CSS development.";

        // Keywords meta tag ni o'zgartirish
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = "keywords";
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.content = "rem to px, px to rem, css units converter, responsive design, web development";

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
            { property: 'og:title', content: 'Rem to Px Converter - Convert CSS Units Easily' },
            { property: 'og:description', content: 'Free online tool to convert REM units to Pixels and vice versa.' },
            { property: 'og:url', content: 'https://remtopx.vercel.app' },
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
            { name: 'twitter:title', content: 'Rem to Px Converter' },
            { name: 'twitter:description', content: 'Free online tool to convert REM units to Pixels and vice versa.' }
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

    // Convert REM to PX
    const convertRemToPx = (rem) => {
        const remNum = parseFloat(rem);
        if (isNaN(remNum)) return '';
        return (remNum * rootFontSize).toString();
    };

    // Convert PX to REM
    const convertPxToRem = (px) => {
        const pxNum = parseFloat(px);
        if (isNaN(pxNum)) return '';
        return (pxNum / rootFontSize).toString();
    };

    // Handle REM input change
    const handleRemChange = (e) => {
        const value = e.target.value;
        setRemValue(value);

        if (value === '') {
            setPxValue('');
            setResult('0px');
            return;
        }

        const pxResult = convertRemToPx(value);
        setPxValue(pxResult);
        setResult(`${pxResult}px`);
    };

    // Handle PX input change
    const handlePxChange = (e) => {
        const value = e.target.value;
        setPxValue(value);

        if (value === '') {
            setRemValue('');
            setResult('0px');
            return;
        }

        const remResult = convertPxToRem(value);
        setRemValue(remResult);
        setResult(`${value}px = ${remResult}rem`);
    };

    // Initialize with default value
    useEffect(() => {
        setResult('16px');
    }, []);

    return (
        <div id='rem-to-px'>
            <div className="container">
                <h1><span>REM</span> to <span>PX</span> Converter</h1>
                <div className="inputs">
                    <div className="input">
                        <h2>REM</h2>
                        <div className="inp">
                            <input
                                type="text"
                                value={remValue}
                                onChange={handleRemChange}
                            />
                            <span>rem</span>
                        </div>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                            </svg>
                        </span>
                    </div>
                    <Link to="/px-to-rem" className="middle-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 fill-secondary" data-astro-cid-xcnsg3e5=""> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" data-astro-cid-xcnsg3e5=""></path> </svg>
                    </Link>
                    <div className="input">
                        <h2>Pixels</h2>
                        <div className="inp">
                            <input
                                type="text"
                                value={pxValue}
                                onChange={handlePxChange}
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
                <h1>Result: <span>{result}</span></h1>
                <p>Calculation based on a root font-size of {rootFontSize} pixels.</p>
            </div>
        </div>
    );
};

export default RemToPx;