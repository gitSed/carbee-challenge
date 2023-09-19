import { Cursor, ProtectedRequest } from '@/modules/shared/domain/entities';

interface ExistingAppointmentsRequest extends ProtectedRequest {
  size: number;
  before?: Cursor;
  after?: Cursor;
}

export default ExistingAppointmentsRequest;
