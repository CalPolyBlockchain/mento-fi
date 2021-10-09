import Head from 'next/head'
import { toTitleCase } from 'src/utils/string'

export function HeadMeta({ pathName }: { pathName: string }) {
  return (
    <Head>
      <title>{`Mento [ALPHA] | ${getHeadTitle(pathName)}`}</title>
    </Head>
  )
}

function getHeadTitle(pathName: string) {
  const segments = pathName.split('/')
  if (segments.length <= 1 || !segments[1]) return 'Home'
  else return toTitleCase(segments[1])
}
