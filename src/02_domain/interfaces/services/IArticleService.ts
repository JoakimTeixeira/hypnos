import { DocumentQuery } from "mongoose";

import IArticle from "../entities/IArticle";
import FoundArticles from "../../valueObjects/FoundArticles";

interface IArticleService {
    getBoostedArticles(skip?: number, limit?: number): Promise<FoundArticles>;
    getByCustomUri(customUri: string): DocumentQuery<IArticle | null, IArticle, {}>;
    getRelateds(articleUri: string, limit?: number): Promise<any[] | FoundArticles>;
}

export default IArticleService;