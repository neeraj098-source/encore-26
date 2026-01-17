import React, { CSSProperties, ReactNode } from 'react';

interface Logo {
  node?: ReactNode;
  src?: string;
  alt?: string;
  title?: string;
  href?: string;
}

interface LogoLoopProps {
  logos: Logo[];
  speed?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  logoHeight?: number;
  gap?: number;
  hoverSpeed?: number;
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  ariaLabel?: string;
}

const LogoLoop: React.FC<LogoLoopProps> = ({
  logos,
  speed = 50,
  direction = 'left',
  logoHeight = 48,
  gap = 40,
  hoverSpeed = 0,
  scaleOnHover = true,
  fadeOut = true,
  fadeOutColor = '#ffffff',
  ariaLabel = 'Logo loop',
}) => {
  const [isHovering, setIsHovering] = React.useState(false);

  const isVertical = direction === 'up' || direction === 'down';

  const itemWidth = logoHeight + gap;
  const totalWidth = logos.length * itemWidth;

  const containerStyle: CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: isVertical ? '100%' : 'auto',
  };

  const wrapperStyle: CSSProperties = {
    display: 'flex',
    flexDirection: isVertical ? 'column' : 'row',
    gap: `${gap}px`,
    animation: `scroll-${direction} ${speed}s linear infinite`,
    animationPlayState: isHovering ? 'paused' : 'running',
    width: isVertical ? 'auto' : `${totalWidth * 2}px`,
  };

  const itemStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: isVertical ? 'auto' : logoHeight,
    minHeight: isVertical ? logoHeight : 'auto',
    flexShrink: 0,
  };

  const logoStyle: CSSProperties = {
    height: logoHeight,
    width: logoHeight,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: scaleOnHover ? 'transform 0.3s ease' : 'none',
    transform: scaleOnHover && isHovering ? 'scale(1.15)' : 'scale(1)',
    color: 'inherit',
  };

  const gradient = isVertical
    ? `linear-gradient(to ${direction === 'up' ? 'top' : 'bottom'}, transparent, ${fadeOutColor})`
    : `linear-gradient(to ${direction === 'left' ? 'left' : 'right'}, transparent, ${fadeOutColor})`;

  const fadeStyle: CSSProperties = fadeOut
    ? {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: gradient,
        pointerEvents: 'none',
        zIndex: 10,
      }
    : {};

  // Create animation keyframes dynamically
  const keyframes = `
    @keyframes scroll-left {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-${totalWidth}px);
      }
    }

    @keyframes scroll-right {
      0% {
        transform: translateX(-${totalWidth}px);
      }
      100% {
        transform: translateX(0);
      }
    }

    @keyframes scroll-up {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-${totalWidth}px);
      }
    }

    @keyframes scroll-down {
      0% {
        transform: translateY(-${totalWidth}px);
      }
      100% {
        transform: translateY(0);
      }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={containerStyle}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        aria-label={ariaLabel}
      >
        <div style={wrapperStyle}>
          {/* Original logos */}
          {logos.map((logo, index) => (
            <a
              key={`original-${index}`}
              href={logo.href || '#'}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...itemStyle,
                textDecoration: 'none',
                cursor: logo.href ? 'pointer' : 'default',
              }}
              title={logo.title}
              onClick={(e) => {
                if (!logo.href) e.preventDefault();
              }}
            >
              <div style={logoStyle}>
                {logo.node && <div>{logo.node}</div>}
                {logo.src && <img src={logo.src} alt={logo.alt || ''} style={{ height: logoHeight }} />}
              </div>
            </a>
          ))}
          {/* Duplicate logos for seamless infinite loop */}
          {logos.map((logo, index) => (
            <a
              key={`duplicate-${index}`}
              href={logo.href || '#'}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...itemStyle,
                textDecoration: 'none',
                cursor: logo.href ? 'pointer' : 'default',
              }}
              title={logo.title}
              onClick={(e) => {
                if (!logo.href) e.preventDefault();
              }}
            >
              <div style={logoStyle}>
                {logo.node && <div>{logo.node}</div>}
                {logo.src && <img src={logo.src} alt={logo.alt || ''} style={{ height: logoHeight }} />}
              </div>
            </a>
          ))}
        </div>
        {fadeOut && <div style={fadeStyle} />}
      </div>
    </>
  );
};

export default LogoLoop;
