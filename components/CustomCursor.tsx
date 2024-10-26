import { CSSProperties, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import {
  AnimatedCursorCoordinates,
  AnimatedCursorOptions,
  AnimatedCursorProps,
  Clickable
} from '@/lib/types';
import findInArray from '@/lib/utils';
import { useEventListener } from '@/hooks/useEventListener';
import useIsTouchdevice from '@/hooks/useIsTouchdevice';

function CursorCore({
  clickables = [
    'a',
    'input[type="text"]',
    'input[type="email"]',
    'input[type="number"]',
    'input[type="submit"]',
    'input[type="image"]',
    'label[for]',
    'select',
    'textarea',
    'button',
    '.link'
  ],
  children,
  color = '220, 90, 90',
  innerScale = 0.6,
  innerSize = 8,
  innerStyle,
  outerAlpha = 0.4,
  outerScale = 6,
  outerSize = 8,
  outerStyle,
  showSystemCursor = false,
  trailingSpeed = 8
}: AnimatedCursorProps) {
  const defaultOptions = useMemo(
    () => ({
      children,
      color,
      innerScale,
      innerSize,
      innerStyle,
      outerAlpha,
      outerScale,
      outerSize,
      outerStyle
    }),
    [
      children,
      color,
      innerScale,
      innerSize,
      innerStyle,
      outerAlpha,
      outerScale,
      outerSize,
      outerStyle
    ]
  );

  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);
  const [coords, setCoords] = useState<AnimatedCursorCoordinates>({
    x: 0,
    y: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const [options, setOptions] = useState(defaultOptions);
  const [isActive, setIsActive] = useState<boolean | AnimatedCursorOptions>(false);
  const [isActiveClickable, setIsActiveClickable] = useState(false);
  const endX = useRef(0);
  const endY = useRef(0);

  /**
   * Primary Mouse move event
   * @param {number} clientX - MouseEvent.clientX
   * @param {number} clientY - MouseEvent.clientY
   */
  const onMouseMove = useCallback((event: MouseEvent) => {
    const { clientX, clientY } = event;
    setCoords({ x: clientX, y: clientY });
    if (cursorInnerRef.current !== null) {
      cursorInnerRef.current.style.top = `${clientY}px`;
      cursorInnerRef.current.style.left = `${clientX}px`;
    }
    endX.current = clientX;
    endY.current = clientY;
  }, []);

  // Outer Cursor Animation Delay
  const animateOuterCursor = useCallback(
    (time: number) => {
      if (previousTimeRef.current !== undefined) {
        coords.x += (endX.current - coords.x) / trailingSpeed;
        coords.y += (endY.current - coords.y) / trailingSpeed;
        if (cursorOuterRef.current !== null) {
          cursorOuterRef.current.style.top = `${coords.y}px`;
          cursorOuterRef.current.style.left = `${coords.x}px`;
        }
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animateOuterCursor);
    },
    [requestRef] // eslint-disable-line
  );

  // Outer cursor RAF setup / cleanup
  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateOuterCursor);
    return () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [animateOuterCursor]);

  /**
   * Calculates amount to scale cursor in px3
   * @param {number} orignalSize - starting size
   * @param {number} scaleAmount - Amount to scale
   * @returns {String} Scale amount in px
   */
  const getScaleAmount = (orignalSize: number, scaleAmount: number) => {
    return `${parseInt(String(orignalSize * scaleAmount))}px`;
  };

  // Scales cursor by HxW
  const scaleBySize = useCallback(
    (cursorRef: HTMLDivElement | null, orignalSize: number, scaleAmount: number) => {
      if (cursorRef) {
        cursorRef.style.height = getScaleAmount(orignalSize, scaleAmount);
        cursorRef.style.width = getScaleAmount(orignalSize, scaleAmount);
      }
    },
    []
  );

  // Mouse Events State updates
  const onMouseDown = useCallback(() => setIsActive(true), []);
  const onMouseUp = useCallback(() => setIsActive(false), []);
  const onMouseEnterViewport = useCallback(() => setIsVisible(true), []);
  const onMouseLeaveViewport = useCallback(() => setIsVisible(false), []);

  useEventListener('mousemove', onMouseMove);
  useEventListener('mousedown', onMouseDown);
  useEventListener('mouseup', onMouseUp);
  useEventListener('mouseover', onMouseEnterViewport);
  useEventListener('mouseout', onMouseLeaveViewport);

  // Cursors Hover/Active State
  useEffect(() => {
    if (isActive) {
      scaleBySize(cursorInnerRef.current, options.innerSize, options.innerScale);
      scaleBySize(cursorOuterRef.current, options.outerSize, options.outerScale);
    } else {
      scaleBySize(cursorInnerRef.current, options.innerSize, 1);
      scaleBySize(cursorOuterRef.current, options.outerSize, 1);
    }
  }, [
    options.innerSize,
    options.innerScale,
    options.outerSize,
    options.outerScale,
    scaleBySize,
    isActive
  ]);

  // Cursors Click States
  useEffect(() => {
    if (isActiveClickable) {
      scaleBySize(cursorInnerRef.current, options.innerSize, options.innerScale * 1.2);
      scaleBySize(cursorOuterRef.current, options.outerSize, options.outerScale * 1.4);
    }
  }, [
    options.innerSize,
    options.innerScale,
    options.outerSize,
    options.outerScale,
    scaleBySize,
    isActiveClickable
  ]);

  // Cursor Visibility Statea
  useEffect(() => {
    if (cursorInnerRef.current == null || cursorOuterRef.current == null) return;

    if (isVisible) {
      cursorInnerRef.current.style.opacity = '1';
      cursorOuterRef.current.style.opacity = '1';
    } else {
      cursorInnerRef.current.style.opacity = '0';
      cursorOuterRef.current.style.opacity = '0';
    }
  }, [isVisible]);

  // Click event state updates
  useEffect(() => {
    const clickableEls = document.querySelectorAll<HTMLElement>(
      clickables
        .map((clickable) =>
          typeof clickable === 'object' && clickable?.target ? clickable.target : (clickable ?? '')
        )
        .join(',')
    );

    clickableEls.forEach((el) => {
      if (!showSystemCursor) el.style.cursor = 'none';

      const clickableOptions =
        typeof clickables === 'object'
          ? findInArray(
              clickables,
              (clickable: Clickable) =>
                typeof clickable === 'object' && el.matches(clickable.target)
            )
          : {};

      const options = {
        ...defaultOptions,
        ...clickableOptions
      };

      el.addEventListener('mouseover', () => {
        setIsActive(true);
        setOptions(options);
      });
      el.addEventListener('click', () => {
        setIsActive(true);
        setIsActiveClickable(false);
      });
      el.addEventListener('mousedown', () => {
        setIsActiveClickable(true);
      });
      el.addEventListener('mouseup', () => {
        setIsActive(true);
      });
      el.addEventListener('mouseout', () => {
        setIsActive(false);
        setIsActiveClickable(false);
        setOptions(defaultOptions);
      });
    });

    return () => {
      clickableEls.forEach((el) => {
        const clickableOptions =
          typeof clickables === 'object'
            ? findInArray(
                clickables,
                (clickable: Clickable) =>
                  typeof clickable === 'object' && el.matches(clickable.target)
              )
            : {};

        const options = {
          ...defaultOptions,
          ...clickableOptions
        };

        el.removeEventListener('mouseover', () => {
          setIsActive(true);
          setOptions(options);
        });
        el.removeEventListener('click', () => {
          setIsActive(true);
          setIsActiveClickable(false);
        });
        el.removeEventListener('mousedown', () => {
          setIsActiveClickable(true);
        });
        el.removeEventListener('mouseup', () => {
          setIsActive(true);
        });
        el.removeEventListener('mouseout', () => {
          setIsActive(false);
          setIsActiveClickable(false);
          setOptions(defaultOptions);
        });
      });
    };
  }, [isActive, clickables, showSystemCursor, defaultOptions]);

  useEffect(() => {
    if (typeof window === 'object' && !showSystemCursor) {
      document.body.style.cursor = 'none';
    }
  }, [showSystemCursor]);

  const coreStyles: CSSProperties = {
    zIndex: 999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    borderRadius: '50%',
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%)',
    transition: 'opacity 0.15s ease-in-out, height 0.2s ease-in-out, width 0.2s ease-in-out'
  };

  // Cursor Styles
  const styles = {
    cursorInner: {
      width: !options.children ? options.innerSize : 'auto',
      height: !options.children ? options.innerSize : 'auto',
      backgroundColor: !options.children ? `rgba(${options.color}, 1)` : 'transparent',
      ...coreStyles,
      ...(options.innerStyle && options.innerStyle)
    },
    cursorOuter: {
      width: options.outerSize,
      height: options.outerSize,
      backgroundColor: `rgba(${options.color}, ${options.outerAlpha})`,
      ...coreStyles,
      ...(options.outerStyle && options.outerStyle)
    }
  };

  return (
    <>
      <div ref={cursorOuterRef} style={styles.cursorOuter} />
      <div ref={cursorInnerRef} style={styles.cursorInner}>
        <div
          style={{
            opacity: !options.children ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out'
          }}
        >
          {options.children}
        </div>
      </div>
    </>
  );
}

/**
 * AnimatedCursor
 * Calls and passes props to CursorCore if not a touch/mobile device.
 */
function AnimatedCursor({
  children,
  clickables,
  color,
  innerScale,
  innerSize,
  innerStyle,
  outerAlpha,
  outerScale,
  outerSize,
  outerStyle,
  showSystemCursor,
  trailingSpeed
}: AnimatedCursorProps) {
  const isTouchdevice = useIsTouchdevice();
  if (typeof window !== 'undefined' && isTouchdevice) {
    return <></>;
  }
  return (
    <CursorCore
      clickables={clickables}
      color={color}
      innerScale={innerScale}
      innerSize={innerSize}
      innerStyle={innerStyle}
      outerAlpha={outerAlpha}
      outerScale={outerScale}
      outerSize={outerSize}
      outerStyle={outerStyle}
      showSystemCursor={showSystemCursor}
      trailingSpeed={trailingSpeed}
    >
      {children}
    </CursorCore>
  );
}

export default AnimatedCursor;
