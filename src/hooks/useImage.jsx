export default function useImage(imageName) {
    return `${process.env.PUBLIC_URL}/images/${imageName}`;
}