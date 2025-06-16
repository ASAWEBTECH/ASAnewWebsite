import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const Quadrado = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([false, false, false]);
  const quadradoRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = quadradoRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        },
        {
          threshold: 0, // Animation starts as soon as any part of the element is visible
          rootMargin: '0px' // No margin, triggers exactly when element enters viewport
        }
      );

      if (ref) {
        observer.observe(ref);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (quadradoRefs.current[index]) {
          observer.unobserve(quadradoRefs.current[index]!);
        }
      });
    };
  });

  const quadradosData = [
    {
      title: 'Elementary',
      imgSrc: '/A2.webp',
      buttonColor: '#22B14C',
    },
    {
      title: 'Middle School',
      imgSrc: '/A1.webp',
      buttonColor: '#00A2E8',
     
    },
    {
      title: 'High School',
      imgSrc: '/A3.webp',
      buttonColor: 'red',
    },
  ];

  return (
    <div style={styles.quadradoContainer}>
      {quadradosData.map((item, index) => (
        <div
          key={index}
          ref={el => { quadradoRefs.current[index] = el; }}
          style={{
            ...styles.quadradoBlur,
            opacity: visibleItems[index] ? 1 : 0,
            transform: visibleItems[index] ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          }}
        >
          <div style={styles.divInQuadrado}>
            <p style={styles.textQuadrado}>{item.title}</p>
            <button
              style={{ ...styles.buttonQuadrado, backgroundColor: item.buttonColor }}
              onClick={() => window.location.href = "/Education"}
            >
              <p style={styles.textButton}>View More</p>
            </button>
          </div>
          <div style={styles.conteudoQuadrado}>
            <Image
              src={item.imgSrc}
              alt={item.title}
              style={styles.imgAlunos}
              width={280}
              height={320}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  quadradoBlur: {
    width: '350px',
    height: '330px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'row' as const,
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '11px 2px 6px rgba(0,0,0,0.3)',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    padding: '10px',
    opacity: 0,
    willChange: 'opacity, transform',
  },
  divInQuadrado: {
    display: 'flex',
    width: '50%',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center' as const,
    marginRight: '10px',
  },
  conteudoQuadrado: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row' as const,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textQuadrado: {
    textAlign: 'center' as const,
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: '20px',
    marginBottom: '50px',
  },
  textButton: {
    fontWeight: 'bold',
  },
  quadradoContainer: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    justifyContent: 'center',
    alignItems: 'center',
    gap: '60px',
    width: '100%',
    margin: '0 auto',
    marginTop: '10px',
  },
  buttonQuadrado: {
    width: '100px',
    height: '40px',
    borderTopLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    cursor: 'pointer',
    border: 'none',
    color: '#fff',
  },
  imgAlunos: {
    position: 'absolute' as const,
    marginBottom: '-10px',
    alignSelf: 'flex-end',
  },
};

export default Quadrado;