import { Comments } from "../comments/comments"

export class Video {
    
    title:String
    url:String
    imgSrc:String
    channelName:String
    likes:number
    comments:Comments
    nbViews:String
    uploadedDate:String
    categories:String[]

    constructor(title:String,url:String,imgSrc:String,channelName:String,likes:number,comments:Comments,nbViews:String,uploadedDate:String,categories:String[]){
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
