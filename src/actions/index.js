export const selectMember = (member) => {
    console.log("You clicked on member: ", member.first);
    return {
        type: 'MEMBER_SELECTED', // type value is  String, Description of what happens in a app
        payload: member             
    }
}