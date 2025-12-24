'use client';
import React, { useState, useCallback } from 'react';
import styles from './CallbackHookClient.module.scss';

const ProductCard = React.memo(({ product, onAddToCart }: { product: any, onAddToCart: (name: string) => void }) => {
    console.log(`Rendering Product: ${product.name}`);

    return (
        <div className={styles.card}>
            <div className={styles.imagePlaceholder}>{product.emoji}</div>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => onAddToCart(product.name)} className={styles.buyBtn}>
                Add to Cart
            </button>
        </div>
    );
});

ProductCard.displayName = 'ProductCard';

const products = [
    { id: 1, name: 'Premium Headphones', price: 299, emoji: '🎧' },
    { id: 2, name: 'Mechanical Keyboard', price: 150, emoji: '⌨️' },
    { id: 3, name: 'Wireless Mouse', price: 89, emoji: '🖱️' },
];

const CallbackHookClient = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [cartCount, setCartCount] = useState(0);



    // 1. WITHOUT useCallback:
    // const addToCart = (productName: string) => {
    //     console.log(`Added ${productName}`);
    //     setCartCount(prev => prev + 1);
    // };

    // 2. WITH useCallback:
    const addToCart = useCallback((productName: string) => {
        console.log(`Added ${productName}`);
        setCartCount(prev => prev + 1);
    }, []);

    const themeClass = isDarkMode ? styles.dark : styles.light;

    return (
        <div className={`${styles.callbackHookClient} ${themeClass}`}>
            <h2>UseCallback Store</h2>

            <div className={styles.header}>
                <div className={styles.controls}>
                    <button onClick={() => setIsDarkMode(!isDarkMode)}>
                        Toggle Theme ({isDarkMode ? 'Dark' : 'Light'})
                    </button>
                    <span className={styles.cart}>🛒 Cart: {cartCount}</span>
                </div>
            </div>

            <div className={styles.grid}>
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={addToCart}
                    />
                ))}
            </div>

            <p className={styles.note}>
                Open Console: Toggling "Theme" should NOT log "Rendering Product".
            </p>
        </div>
    );
};

export default CallbackHookClient;