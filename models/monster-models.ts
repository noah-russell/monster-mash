export interface NewMonster {
  monster_name: string
  top_artist: string
  bottom_artist: string
  image_url: string
}

export interface Monster {
  monster_name: string
  top_artist: string
  bottom_artist: string
  image_url: string
  id: number
  date_created: Date
}

export interface newMonsterName {
  monster_name: string
}