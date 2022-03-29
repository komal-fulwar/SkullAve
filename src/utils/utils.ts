export const getIdFromName = (nftName: string) => {
    const id = nftName.split("-")[1].split("#")[1]
    return id
}

export const trimString = (name: string) => {
    if(name.length > 15)
    {
        return name.slice(0,15) + '...'
    }
    else {
        return name
    }
}