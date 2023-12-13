export enum ROUTE_TYPE {
  HOME = 'HOME', 
  NOTES = 'NOTES',
  SIGNAL = 'SIGNAL',
  HYDRATION = 'HYDRATION',
  STANDALONE = 'STANDALONE',
  ESBUILD = 'ESBUILD',
  CSP_NONCE = 'CSP_NONCE',
  INPUT_BINDING = 'INPUT_BINDING',
  DESTROY_REF = 'DESTROY_REF'
};

export const ROUTE_MAP = new Map<string, ROUTE_TYPE>([
  ['/home', ROUTE_TYPE.HOME],
  ['/notes', ROUTE_TYPE.NOTES],
  ['/signal', ROUTE_TYPE.SIGNAL],
  ['/hydration', ROUTE_TYPE.HYDRATION],
  ['/standalone', ROUTE_TYPE.STANDALONE],
  ['/esbuild', ROUTE_TYPE.ESBUILD],
  ['/cspnonce', ROUTE_TYPE.CSP_NONCE],
  ['/input-binding', ROUTE_TYPE.INPUT_BINDING],
  ['/destroy-ref', ROUTE_TYPE.DESTROY_REF]
]);

export const TYPE_TITLE_MAP = new Map<ROUTE_TYPE, string>([
  [ROUTE_TYPE.HOME, ''],
  [ROUTE_TYPE.NOTES, 'Notes'],
  [ROUTE_TYPE.SIGNAL, 'Signal APIs (Developer Preview)'],
  [ROUTE_TYPE.HYDRATION, 'Non-destructive Hydration (Developer Preview)'],
  [ROUTE_TYPE.STANDALONE, 'Enhancements for Standalone API'],
  [ROUTE_TYPE.ESBUILD, 'esbuild Supported on the ng build (Developer Preview)'],
  [ROUTE_TYPE.CSP_NONCE, 'CSP Supports for CSS Inline Styles'],
  [ROUTE_TYPE.INPUT_BINDING, 'Router Syntax Improvement - Input Binding'],
  [ROUTE_TYPE.DESTROY_REF, 'Injectable DestroyRef']
]);