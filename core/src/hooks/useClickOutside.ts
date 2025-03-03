import { useEventListener } from './useEventListener';

export const useClickOutside = (
  ref: any, // eslint-disable-line @typescript-eslint/no-explicit-any
  handler: any, // eslint-disable-line @typescript-eslint/no-explicit-any
  mouseEvent = 'mousedown'
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useEventListener(mouseEvent, (event: any) => {
    const el = ref?.current;

    if (!el || el.contains(event.target)) {
      return;
    }

    handler(event);
  });
};
