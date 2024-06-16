import ContentDisplay from '@/components/contentDisplay'
const SubContentPage = ({ params: { subContentId } }) => {
  return <ContentDisplay id={subContentId} />
}
export default SubContentPage
