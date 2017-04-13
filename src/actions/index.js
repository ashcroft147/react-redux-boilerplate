export const selectMembers = (member) => {
    console.log("You clicked on member: ", member.first);
    return {
        type: 'MEMBER_SELECTED',
        payload: member
    }
}