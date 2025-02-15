export type TVideo = {
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
      "video": {
        "id": number,
        "owner_id": number,
        "title": string,
        "duration": number,
        "description": string,
        "date": number,
        "comments": number,
        "views": number,
        "width": number,
        "height": number,
        "image": [
          {
            "height": number,
            "url": string,
            "width": number,
            "with_padding": number
          },
          {
            "height": number,
            "url": string,
            "width": number,
            "with_padding": number
          },
          {
            "height": number,
            "url": string,
            "width": number,
            "with_padding": number
          },
          {
            "height": number,
            "url": string,
            "width": number,
            "with_padding": number
          },
          {
            "height": number,
            "url": string,
            "width": number
          },
          {
            "height": number,
            "url": string,
            "width": number
          },
          {
            "height": number,
            "url": string,
            "width": number
          },
          {
            "height": number,
            "url": string,
            "width": number
          },
          {
            "height": number,
            "url": string,
            "width": number
          }
        ],
        "is_favorite": boolean,
        "first_frame": [
          {
            "url": string,
            "width": number,
            "height": number
          },
          {
            "url": string,
            "width": number,
            "height": number
          },
          {
            "url": string,
            "width": number,
            "height": number
          },
          {
            "url": string,
            "width": number,
            "height": number
          },
          {
            "url": string,
            "width": number,
            "height": number
          },
          {
            "url": string,
            "width": number,
            "height": number
          },
          {
            "url": string,
            "width": number,
            "height": number
          },
          {
            "url": string,
            "width": number,
            "height": number
          },
          {
            "url": string,
            "width": number,
            "height": number
          }
        ],
        "access_key": string,
        "can_add": number,
        "track_code": string,
        "type": string
      }
    },
    {
      "type": string,
      "link": {
        "url": string,
        "title": string,
        "description": string,
        "target": string,
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
    "groups_can_post": boolean
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