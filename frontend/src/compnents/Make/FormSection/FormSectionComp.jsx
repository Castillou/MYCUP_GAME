import { Form } from 'react-router-dom';
import UploadForm from './UploadForm';

export default function FormSectionComp() {
	return (
		<Form method="post">
			<UploadForm />
		</Form>
	);
}
