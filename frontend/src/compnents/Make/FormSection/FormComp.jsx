import { Form } from 'react-router-dom';
import UploadForm from './UploadForm';

export default function FormComp() {
	return (
		<Form method="post">
			<UploadForm />
		</Form>
	);
}
