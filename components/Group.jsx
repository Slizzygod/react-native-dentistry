import React from "react";
import { Text, View, Image } from "react-native";

import styled from "styled-components/native";

import GrayText from "./GrayText";
import Badge from "./Badge";

const Group = ({ items, navigate }) => {
  return (
    <GroupItem onPress={() => navigate("Patient", { ...items })}>
      <Avatar
        source={{
          uri: items.user.avatar,
        }}
      />
      <View style={{ flex: 1 }}>
        <FullName>{items.user.fullName}</FullName>
        <GrayText>{items.diagnosis}</GrayText>
      </View>
      <Badge active={items.active}>{items.time}</Badge>
    </GroupItem>
  );
};

export default Group;

Group.defaultProps = {
  items: [],
};

const GroupItem = styled.TouchableOpacity`
  margin: 0 20px;
  padding: 20px 0;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #c9c9c9;
`;

const Avatar = styled.Image`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;

const FullName = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
