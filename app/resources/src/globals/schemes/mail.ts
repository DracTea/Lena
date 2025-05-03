
export const scheme = {
    singular: "Mail",
    plural: "Mails",
    url: "/mail",
    table: {
        headers: [
            { id: "id", label: "Id", type: "text"},
            { id: "title", label: "Title", type: "text"},
            { id: "email", label: "Email", type: "text"},
            { id: "status", label: "Status", type: "text"},
            { id: "updated_at", label: "Updated At", type: "text", alignment: "end"},
        ],
        actions: []
    }
  }
  
  export default scheme