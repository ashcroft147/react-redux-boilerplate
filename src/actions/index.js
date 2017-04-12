export const selectMembers = (member) => {
    console.log("You clicked on member: ", member.selected);
    return {
        type: 'MEMBER_SELECTED',
        payload: member
    }
}