import { Comments } from "../comments/comments"

export class Video {
    
    id:number
    title:string
    url:string
    imgSrc:string
    channelName:string
    likes:number
    comments:Comments[]
    nbViews:string
    uploadDate:String
    categories:string[]

    constructor(id:number,title:string,url:string,imgSrc:string,channelName:string,likes:number,comments:Comments[],nbViews:string,uploadedDate:String,categories:string[]){
        this.id = id
        this.title = title
        this.url = url
        this.imgSrc = imgSrc
        this.channelName = channelName
        this.likes = likes
        this.comments = comments
        this.nbViews = nbViews
        this.uploadDate = uploadedDate
        this.categories = categories
    }

}
