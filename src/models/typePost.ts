export type TPost = {
  "id": number,
  "from_id": number,
  "owner_id": number,
  "date": number,
  "marked_as_ads": number,
  "post_type": string,
  "text": string,
  "attachments": [
    {
      "type": string,
      "link": {
        "url": string,
        "title": string,
        "caption": string,
        "description": string,
        "photo": {
          "id": number,
          "album_id": number,
          "owner_id": number,
          "sizes": [
            {
              "type": string,
              "url": string,
              "width": number,
              "height": number
            },
            {
              "type": string,
              "url": string,
              "width": number,
              "height": number
            },
            {
              "type": string,
              "url": string,
              "width": number,
              "height": number
            },
            {
              "type": string,
              "url": string,
              "width": number,
              "height": number
            },
            {
              "type": string,
              "url": string,
              "width": number,
              "height": number
            },
            {
              "type": string,
              "url": string,
              "width": number,
              "height": number
            },
            {
              "type": string,
              "url": string,
              "width": number,
              "height": number
            },
            {
              "type": string,
              "url": string,
              "width": number,
              "height": number
            }
          ],
          "text": string,
          "date": number
        },
        "is_favorite": boolean
      }
    }
  ],
  "post_source": {
    "type": string
  },
  "comments": {
    "count": number,
    "can_post": number,
    "groups_can_post": true
  },
  "likes": {
    "count": number,
    "user_likes": number,
    "can_like": number,
    "can_publish": number
  },
  "reposts": {
    "count": number,
    "user_reposted": number
  },
  "views": {
    "count": number
  },
  "is_favorite": boolean
}