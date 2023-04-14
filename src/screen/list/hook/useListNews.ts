import { useEffect, useState } from "react"
import { Article } from "../../../data/model"
import { NewsService } from "../../../data/service"
import { UseListNewsResult } from "./interface"

const useListNews = (): UseListNewsResult => {
    const [isLoading, setIsLoading] = useState(false)
    const [articles, setArticles] = useState<Article[]>([])

    const getHeadlines = async (): Promisse<Article[]> => {
        const result = await NewsService.getHeadlines()
        return result
    }

    useEffect(() => {

        const loadingHeadlines = async () => {
            setIsLoading(true)
            const result = await getHeadlines()
            setIsLoading(false)
            setArticles(result)
        }

        loadingHeadlines()       
    }, [])

    return {
        isLoading,
        articles,
    }
}

export default useListNews