import { InjectionToken } from '@angular/core';

export const SWIPER_CONFIG = new InjectionToken<SwiperConfigInterface>('SWIPER_CONFIG');

export type SwiperEvent = 'init' | 'beforeDestroy' | 'slideChange' | 'slideChangeTransitionStart' |
  'slideChangeTransitionEnd' | 'slideNextTransitionStart' | 'slideNextTransitionEnd' |
  'slidePrevTransitionStart' | 'slidePrevTransitionEnd' | 'swiperTransitionStart' |
  'swiperTransitionEnd' | 'swiperTouchStart' | 'swiperTouchMove' | 'swiperTouchMoveOpposite' |
  'sliderMove' | 'swiperTouchEnd' | 'swiperClick' | 'swiperTap' | 'swiperDoubleTap' |
  'imagesReady' | 'progress' | 'reachBeginning' | 'reachEnd' | 'fromEdge' | 'setTranslate' |
  'setTransition' | 'resize' | 'observerUpdate' | 'beforeLoopFix' | 'loopFix' | 'navigationHide' |
  'navigationShow' | 'paginationRender' | 'paginationUpdate' | 'paginationHide' | 'paginationShow' |
  'autoplayStart' | 'autoplayStop' | 'autoplay' | 'lazyImageLoad' | 'lazyImageReady' |
  'zoomChange' | 'scroll' | 'keyPress' | 'breakpoint' | 'beforeResize' | 'scrollbarDragEnd' |
  'scrollbarDragMove' | 'scrollbarDragStart';

export const SwiperEvents: SwiperEvent[] = [
  'init',
  'beforeDestroy',

  'scroll',
  'progress',
  'keyPress',

  'resize',
  'loopFix',
  'breakpoint',
  'zoomChange',
  'beforeResize',
  'beforeLoopFix',

  'sliderMove',
  'slideChange',

  'setTranslate',
  'setTransition',

  'fromEdge',
  'reachEnd',
  'reachBeginning',

  'autoplay',
  'autoplayStop',
  'autoplayStart',

  'imagesReady',
  'lazyImageLoad',
  'lazyImageReady',

  'scrollbarDragEnd',
  'scrollbarDragMove',
  'scrollbarDragStart',

  'navigationHide',
  'navigationShow',

  'paginationRender',
  'paginationUpdate',
  'paginationHide',
  'paginationShow',

  'swiperTap',
  'swiperClick',
  'swiperDoubleTap',
  'swiperTouchEnd',
  'swiperTouchMove',
  'swiperTouchStart',
  'swiperTouchMoveOpposite',
  'swiperTransitionEnd',
  'swiperTransitionStart',

  'slideNextTransitionEnd',
  'slideNextTransitionStart',
  'slidePrevTransitionEnd',
  'slidePrevTransitionStart',
  'slideChangeTransitionEnd',
  'slideChangeTransitionStart'
];

export interface SwiperConfigInterface {
  // Swiper parameters
  init?: boolean,
  updateOnWindowResize?: boolean,
  initialSlide?: number,
  direction?: 'horizontal' | 'vertical',
  speed?: number,
  setWrapperSize?: boolean,
  virtualTranslate?: boolean,
  width?: number,
  height?: number,
  autoHeight?: boolean,
  roundLengths?: boolean,
  nested?: boolean,
  uniqueNavElements?: boolean,
  effect?: 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip',
  runCallbacksOnInit?: boolean,
  watchOverflow?: boolean,

  // CSS scroll snapOnRelease
  cssMode?: boolean,

  // Slides grid
  spaceBetween?: number,
  slidesPerView?: number | 'auto',
  slidesPerColumn?: number,
  slidesPerColumnFill?: 'row' | 'column',
  slidesPerGroup?: number,
  centeredSlides?: boolean,
  centeredSlidesBounds?: boolean,
  slidesOffsetBefore?: number,
  slidesOffsetAfter?: number,
  normalizeSlideIndex?: boolean,
  centerInsufficientSlides?: boolean,

  // Grab cursor
  grabCursor?: boolean,

  // Touches
  touchEventsTarget?: 'container' | 'wrapper',
  touchRatio?: number,
  touchAngle?: number,
  simulateTouch?: boolean,
  shortSwipes?: boolean,
  longSwipes?: boolean,
  longSwipesRatio?: number,
  longSwipesMs?: number,
  followFinger?: boolean,
  allowTouchMove?: boolean,
  threshold?: number,
  touchStartPreventDefault?: boolean,
  touchStartForcePreventDefault?: boolean,
  touchMoveStopPropagation?: boolean,
  iOSEdgeSwipeDetection?: boolean,
  iOSEdgeSwipeThreshold?: number,
  touchReleaseOnEdges?: boolean,
  passiveListeners?: boolean,

  // Touch resistance
  resistance?: boolean,
  resistanceRatio?: number,

  // Swiping / no swiping
  preventInteractionOnTransition?: boolean,
  allowSlidePrev?: boolean,
  allowSlideNext?: boolean,
  noSwiping?: boolean,
  noSwipingClass?: string,
  noSwipingSelector?: string,
  swipeHandler?: string | HTMLElement,

  // Clicks
  preventClicks?: boolean,
  preventClicksPropagation?: boolean,
  slideToClickedSlide?: boolean,

  // Freemode
  freeMode?: boolean,
  freeModeMomentum?: boolean,
  freeModeMomentumRatio?: number,
  freeModeMomentumVelocityRatio?: number,
  freeModeMomentumBounce?: boolean,
  freeModeMomentumBounceRatio?: number,
  freeModeMinimumVelocity?: number,
  freeModeSticky?: boolean,

  // Progress
  watchSlidesProgress?: boolean,
  watchSlidesVisibility?: boolean,

  // Images
  preloadImages?: boolean,
  updateOnImagesReady?: boolean,

  // Loop
  loop?: boolean,
  loopAdditionalSlides?: number,
  loopedSlides?: number,
  loopFillGroupWithBlank?: boolean,

  // Breakpoints
  breakpoints?: SwiperBreakpointsInterface,

  // Observer
  observer?: boolean,
  observeParents?: boolean,
  observeSlideChildren?: boolean,

  // Namespace
  containerModifierClass?: string,
  slideClass?: string,
  slideActiveClass?: string,
  slideDuplicatedActiveClass?: string,
  slideVisibleClass?: string,
  slideDuplicateClass?: string,
  slideNextClass?: string,
  slideDuplicatedNextClass?: string,
  slidePrevClass?: string,
  slideDuplicatedPrevClass?: string,
  wrapperClass?: string,

  // Effects
  fadeEffect?: SwiperFadeEffectInterface,
  flipEffect?: SwiperFlipEffectInterface,
  cubeEffect?: SwiperCubeEffectInterface,
  coverflowEffect?: SwiperCoverflowEffectInterface,

  // Components
  parallax?: boolean,

  a11y?: boolean | SwiperA11YInterface,
  lazy?: boolean | SwiperLazyInterface,
  zoom?: boolean | SwiperZoomInterface,
  thumbs?: boolean | SwiperThumbsInterface,
  history?: boolean | SwiperHistoryInterface,
  virtual?: boolean | SwiperVirtualInterface,
  autoplay?: boolean | SwiperAutoplayInterface,
  keyboard?: boolean | SwiperKeyboardInterface,
  scrollbar?: boolean | SwiperScrollbarInterface,
  mousewheel?: boolean | SwiperMousewheelInterface,
  controller?: boolean | SwiperControllerInterface,
  navigation?: boolean | SwiperNavigationInterface,
  pagination?: boolean | SwiperPaginationInterface,
  hashNavigation?: boolean | SwiperHashNavigationInterface
}

export interface SwiperA11YInterface {
  enabled?: boolean,
  prevSlideMessage?: string,
  nextSlideMessage?: string,
  firstSlideMessage?: string,
  lastSlideMessage?: string,
  paginationBulletMessage?: string,
  notificationClass?: string
}

export interface SwiperLazyInterface {
  loadPrevNext?: boolean,
  loadPrevNextAmount?: number,
  loadOnTransitionStart?: boolean,
  elementClass?: string,
  loadingClass?: string,
  loadedClass?: string,
  preloaderClass?: string
}

export interface SwiperZoomInterface {
  maxRatio?: number,
  minRatio?: number,
  toggle?: boolean,
  containerClass?: string,
  zoomedSlideClass?: string
}

export interface SwiperThumbsInterface {
  swiper?: any,
  slideThumbActiveClass?: string,
  thumbsContainerClass?: string,
  multipleActiveThumbs?: boolean
}

export interface SwiperHistoryInterface {
  replaceState?: boolean,
  key?: string
}

export interface SwiperVirtualInterface {
  slides?: any[],
  cache?: boolean,
  renderSlide?: SwiperRenderSlideFunction,
  renderExternal?: SwiperRenderExternalFunction,
  addSlidesBefore?: number,
  addSlidesAfter?: number
}

export interface SwiperKeyboardInterface {
  enabled?: boolean,
  onlyInViewport?: boolean
}

export interface SwiperAutoplayInterface {
  delay?: number,
  stopOnLastSlide?: boolean,
  disableOnInteraction?: boolean,
  reverseDirection?: boolean,
  waitForTransition?: boolean
}

export interface SwiperScrollbarInterface {
  el?: string | HTMLElement,
  hide?: boolean,
  draggable?: boolean,
  snapOnRelease?: boolean,
  dragSize?: number | 'auto',
  loclClass?: string,
  dragClass?: string
}

export interface SwiperControllerInterface {
  control?: any,
  inverse?: boolean,
  by?: 'slide' | 'container'
}

export interface SwiperNavigationInterface {
  nextEl?: string | HTMLElement,
  prevEl?: string | HTMLElement,
  hideOnClick?: boolean,
  disabledClass?: string,
  hiddenClass?: string
}

export interface SwiperPaginationInterface {
  el?: string | HTMLElement,
  type?: 'bullets' | 'fraction' | 'progressbar' | 'custom',
  bulletElement?: string,
  dynamicBullets?: boolean,
  dynamicMainBullets?: number,
  hideOnClick?: boolean,
  clickable?: boolean,
  progressbarOpposite?: boolean,
  formatFractionCurrent?: SwiperFormatFractionFunction,
  formatFractionTotal?: SwiperFormatFractionFunction,
  renderBullet?: SwiperRenderBulletFunction,
  renderFraction?: SwiperRenderFractionFunction,
  renderProgressbar?: SwiperRenderProgressbarFunction,
  renderCustom?: SwiperRenderCustomFunction,
  bulletClass?: string,
  bulletActiveClass?: string,
  modifierClass?: string,
  currentClass?: string,
  totalClass?: string,
  hiddenClass?: string,
  progressbarFillClass?: string,
  clickableClass?: string,
  lockClass?: string
}

export interface SwiperMousewheelInterface {
  forceToAxis?: boolean,
  releaseOnEdges?: boolean,
  invert?: boolean,
  sensitivity?: number,
  eventsTarget?: string | HTMLElement
}

export interface SwiperHashNavigationInterface {
  watchState?: boolean,
  replaceState?: boolean
}

export interface SwiperFadeEffectInterface {
  crossFade?: boolean
}

export interface SwiperFlipEffectInterface {
  slideShadows?: boolean,
  limitRotation?: boolean
}

export interface SwiperCubeEffectInterface {
  slideShadows?: boolean,
  shadow?: boolean,
  shadowOffset?: number,
  shadowScale?: number
}

export interface SwiperCoverflowEffectInterface {
  slideShadows?: boolean,
  rotate?: number,
  stretch?: number,
  depth?: number,
  modifier?: number
}

export interface SwiperBreakpointsInterface {
  [size: number]: SwiperConfigInterface
}

export class SwiperConfig implements SwiperConfigInterface {
  public on?: any;

  // Swiper parameters
  public init?: boolean;
  public updateOnWindowResize?: boolean;
  public initialSlide?: number;
  public direction?: 'horizontal' | 'vertical';
  public speed?: number;
  public setWrapperSize?: boolean;
  public virtualTranslate?: boolean;
  public width?: number;
  public height?: number;
  public autoHeight?: boolean;
  public roundLengths?: boolean;
  public nested?: boolean;
  public uniqueNavElements?: boolean;
  public effect?: 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip';
  public runCallbacksOnInit?: boolean;
  public watchOverflow?: boolean;

  // CSS scroll snapOnRelease
  public cssMode?: boolean;

  // Slides grid
  public spaceBetween?: number;
  public slidesPerView?: number | 'auto';
  public slidesPerColumn?: number;
  public slidesPerColumnFill?: 'row' | 'column';
  public slidesPerGroup?: number;
  public centeredSlides?: boolean;
  public centeredSlidesBounds?: boolean;
  public slidesOffsetBefore?: number;
  public slidesOffsetAfter?: number;
  public normalizeSlideIndex?: boolean;
  public centerInsufficientSlides?: boolean;

  // Grab cursor
  public grabCursor?: boolean;

  // Touches
  public touchEventsTarget?: 'container' | 'wrapper';
  public touchRatio?: number;
  public touchAngle?: number;
  public simulateTouch?: boolean;
  public shortSwipes?: boolean;
  public longSwipes?: boolean;
  public longSwipesRatio?: number;
  public longSwipesMs?: number;
  public followFinger?: boolean;
  public allowTouchMove?: boolean;
  public threshold?: number;
  public touchStartPreventDefault?: boolean;
  public touchStartForcePreventDefault?: boolean;
  public touchMoveStopPropagation?: boolean;
  public iOSEdgeSwipeDetection?: boolean;
  public iOSEdgeSwipeThreshold?: number;
  public touchReleaseOnEdges?: boolean;
  public passiveListeners?: boolean;

  // Touch resistance
  public resistance?: boolean;
  public resistanceRatio?: number;

  // Swiping / no swiping
  public preventInteractionOnTransition?: boolean;
  public allowSlidePrev?: boolean;
  public allowSlideNext?: boolean;
  public noSwiping?: boolean;
  public noSwipingClass?: string;
  public noSwipingSelector?: string;
  public swipeHandler?: string | HTMLElement;

  // Clicks
  public preventClicks?: boolean;
  public preventClicksPropagation?: boolean;
  public slideToClickedSlide?: boolean;

  // Freemode
  public freeMode?: boolean;
  public freeModeMomentum?: boolean;
  public freeModeMomentumRatio?: number;
  public freeModeMomentumVelocityRatio?: number;
  public freeModeMomentumBounce?: boolean;
  public freeModeMomentumBounceRatio?: number;
  public freeModeMinimumVelocity?: number;
  public freeModeSticky?: boolean;

  // Progress
  public watchSlidesProgress?: boolean;
  public watchSlidesVisibility?: boolean;

  // Images
  public preloadImages?: boolean;
  public updateOnImagesReady?: boolean;

  // Loop
  public loop?: boolean;
  public loopAdditionalSlides?: number;
  public loopedSlides?: number;
  public loopFillGroupWithBlank?: boolean;

  // Breakpoints
  public breakpoints?: any;

  // Observer
  public observer?: boolean;
  public observeParents?: boolean;
  public observeSlideChildren?: boolean;

  // Namespace
  public containerModifierClass?: string;
  public slideClass?: string;
  public slideActiveClass?: string;
  public slideDuplicatedActiveClass?: string;
  public slideVisibleClass?: string;
  public slideDuplicateClass?: string;
  public slideNextClass?: string;
  public slideDuplicatedNextClass?: string;
  public slidePrevClass?: string;
  public slideDuplicatedPrevClass?: string;
  public wrapperClass?: string;

  // Effects
  public fadeEffect?: any;
  public flipEffect?: any;
  public cubeEffect?: any;
  public coverflowEffect?: any;

  // Components
  public parallax?: boolean;

  public a11y?: boolean | any;
  public lazy?: boolean | any;
  public zoom?: boolean | any;
  public history?: boolean | any;
  public virtual?: boolean | any;
  public autoplay?: boolean | any;
  public keyboard?: boolean | any;
  public scrollbar?: boolean | any;
  public mousewheel?: boolean | any;
  public controller?: boolean | any;
  public navigation?: boolean | any;
  public pagination?: boolean | any;
  public hashNavigation?: boolean | any;

  constructor(config: SwiperConfigInterface = {}) {
    this.assign(config);
  }

  assign(config: SwiperConfigInterface | any = {}, target?: any) {
    target = target || this;

    for (const key in config) {
      if (config[key] != null && !Array.isArray(config[key]) && typeof config[key] === 'object' &&
         (typeof HTMLElement === 'undefined' || !(config[key] instanceof HTMLElement)))
      {
        target[key] = {};

        this.assign(config[key], target[key]);
      } else {
        target[key] = config[key];
      }
    }
  }
}

export type SwiperFormatFractionFunction = (fraction: number) => number;

export type SwiperRenderSlideFunction = (slide: any, index: number) => HTMLElement;
export type SwiperRenderExternalFunction = (data: any) => void;

export type SwiperRenderCustomFunction = (swiper: any, current: number, total: number) => string;

export type SwiperRenderBulletFunction = (index: number, className: string) => string;
export type SwiperRenderFractionFunction = (currentClass: string, totalClass: string) => string;
export type SwiperRenderProgressbarFunction = (progressbarClass: string) => string;
