import { sendGAEvent } from '@next/third-parties/google';

type EventParams = Record<string, string | number | boolean | undefined>;

export type AnalyticsEvent =
  | { name: 'contact_email_click'; params: { location: 'contato' } }
  | {
      name: 'social_click';
      params: { network: string; location: 'contato' | 'footer' };
    }
  | {
      name: 'cta_contato_click';
      params: { location: 'more_about' | 'footer' };
    }
  | {
      name: 'external_link_click';
      params: { url: string; location: 'footer' };
    };

export function trackEvent<E extends AnalyticsEvent>(
  name: E['name'],
  params: E['params'],
): void {
  if (!process.env.NEXT_PUBLIC_GA_ID) return;
  sendGAEvent('event', name, params as EventParams);
}
