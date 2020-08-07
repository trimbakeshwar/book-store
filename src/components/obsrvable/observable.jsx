import { Observable,from,BehaviorSubject} from 'rxjs';
import adminService from '../../services/adminServices'
const service = new adminService();
export const SearchSubscriber = new BehaviorSubject(0)
const searchObj = SearchSubscriber.asObservable();
 export default async  function SearchBookName(searchWord){
     console.log("observable ",searchWord)
SearchSubscriber.next( 
    await service.SearchBook(searchWord)
)
}
