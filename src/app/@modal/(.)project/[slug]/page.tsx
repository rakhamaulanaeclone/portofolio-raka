import DetailProject from '../../../project/DetailProject';
import Modal from './Modal';

export default async function InterceptedProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <Modal>
      <DetailProject slug={slug} isModal={true} />
    </Modal>
  );
}
