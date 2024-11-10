import { Comments } from "../comments/comments"

export class Video {
    
    id:number
    title:String
    url:String
    imgSrc:String
    channelName:String
    likes:number
    comments:Comments
    nbViews:String
    uploadedDate:String
    categories:String[]

    constructor(id:number,title:String,url:String,imgSrc:String,channelName:String,likes:number,comments:Comments,nbViews:String,uploadedDate:String,categories:String[]){
        this.id = id
        this.title = title
        this.url = url
        this.imgSrc = imgSrc
        this.channelName = channelName
        this.likes = likes
        this.comments = comments
        this.nbViews = nbViews
        this.uploadedDate = uploadedDate
        this.categories = categories
    }

}
