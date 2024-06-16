import ContentDisplay from '@/components/contentDisplay'

const ContentPage = ({ params: { contentId } }) => {
  return <ContentDisplay id={contentId} />
}
export default ContentPage
