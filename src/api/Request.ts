export async function my_request(duongDan: string) {
    // Truy van den duong dan
    const response = await fetch(duongDan);
    //Neu bi tra ve loi
    if (!response.ok) {
        throw new Error(`Khong the truy cap${duongDan}`);
    }
    // Neu tra ve okie
    return response.json();
}