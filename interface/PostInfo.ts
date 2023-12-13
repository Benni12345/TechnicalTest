interface PostInfo {
    createdAt: Date;
    caption: string;
    user: UserInfo;
    imageUrl: string;
    likeCount: number;
    commentCount: number;
}