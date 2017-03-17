import { Session } from '../sessions/shared/session.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class DataService implements InMemoryDbService {
    createDb() {
        let sessions: Session[] = [
            new Session(1, "Testing mit Angular", "Frankfurt", 4),
            new Session(2, "The ultimate Angular workshop", "Regensdorf", 5),
            new Session(3, "Deployment von Angular Applikationen", "Nürnberg", 3)
        ];
        return { sessions };
    }
}