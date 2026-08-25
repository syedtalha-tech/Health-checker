let users = [{
            id: 1,
            name: "John"
        },
        {
            id: 2,
            name: "Maxwell"
        },
        {
            id: 3,
            name: "Ben"
        },
        {
            id: 4,
            name: "Jason"
        }];

export async function GET() {
    return Response.json(users)
}