import envData from '../../../../../config/env.json';

const { forumLocation } = envData;

interface GuideData {
  forumTopicId: number;
  title?: string;
}

export function getGuideUrl({ forumTopicId, title = '' }: GuideData): string {
  title = encodeURIComponent(title);
  return forumTopicId
    ? `https://forum.freecodecamp.org/t/${forumTopicId}`
    : `${forumLocation}/search?q=${title}%20in%3Atitle%20order%3Aviews`;
}

export function isGoodXHRStatus(status: string): boolean {
  const statusInt = parseInt(status, 10);
  return (statusInt >= 200 && statusInt < 400) || statusInt === 402;
}

export function transformEditorLink(url: string): string {
  return url
    .replace(
      /(\/\/)(?<projectname>[^.]+)\.(?<username>[^.]+)\.repl\.co\/?/,
      '//replit.com/@$<username>/$<projectname>'
    )
    .replace(
      /(\/\/)(?<projectname>[^.]+)\.glitch\.me\/?/,
      '//glitch.com/edit/#!/$<projectname>'
    );
}
