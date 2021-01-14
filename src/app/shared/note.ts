import { User } from './user';

export class Note {
    id: number;
    description: string;
    created: Date;
    modified: Date;
    user: User;
    constructor(id,description,created,modified,user:User){
        this.description=description;
        this.id=id;
        this.created=created;
        this.modified=modified;
        this.user=user
    }
}