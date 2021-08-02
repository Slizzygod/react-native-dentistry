import React from "react";

import { Ionicons } from "@expo/vector-icons";

import { SectionList } from "react-native";

import styled from "styled-components/native";

import { Group } from "../components";
import { GroupTitle } from "../components";

const HomeScreen = ({ navigation }) => {
  const DATA = [
    {
      title: "11 сентября",
      data: [
        {
          user: {
            avatar:
              "https://lh3.googleusercontent.com/proxy/_J269RJvPbvDnk-BbJkX-haJdZIBOzdOaE4rIRbBLHaroDE-iqHU8vr9_LqKPDOYICHHNCn6gobxqmK-RCuSIa50TLda0vkn01nOvBsB94MUIuMc7wlGnvhsdZtHOFU3GR13UWS5RGTl",
            fullName: "Анастасия Захарова",
            phoneNumber: "+7 (922) 712-23-43",
          },
          diagnosis: "пульпит, удаление зуба",
          time: "12:30",
          active: true,
        },
        {
          user: {
            avatar:
              "https://lh3.googleusercontent.com/proxy/_J269RJvPbvDnk-BbJkX-haJdZIBOzdOaE4rIRbBLHaroDE-iqHU8vr9_LqKPDOYICHHNCn6gobxqmK-RCuSIa50TLda0vkn01nOvBsB94MUIuMc7wlGnvhsdZtHOFU3GR13UWS5RGTl",
            fullName: "Василий Пупкин",
            phoneNumber: "+7 (922) 712-23-43",
          },
          diagnosis: "пульпит, удаление зуба",
          time: "12:30",
        },
      ],
    },
    {
      title: "11 сентября",
      data: [
        {
          user: {
            avatar:
              "https://lh3.googleusercontent.com/proxy/_J269RJvPbvDnk-BbJkX-haJdZIBOzdOaE4rIRbBLHaroDE-iqHU8vr9_LqKPDOYICHHNCn6gobxqmK-RCuSIa50TLda0vkn01nOvBsB94MUIuMc7wlGnvhsdZtHOFU3GR13UWS5RGTl",
            fullName: "Анастасия Захарова",
            phoneNumber: "+7 (922) 712-23-43",
          },
          diagnosis: "пульпит, удаление зуба",
          time: "12:30",
          active: true,
        },
        {
          user: {
            avatar:
              "https://lh3.googleusercontent.com/proxy/_J269RJvPbvDnk-BbJkX-haJdZIBOzdOaE4rIRbBLHaroDE-iqHU8vr9_LqKPDOYICHHNCn6gobxqmK-RCuSIa50TLda0vkn01nOvBsB94MUIuMc7wlGnvhsdZtHOFU3GR13UWS5RGTl",
            fullName: "Василий Пупкин",
            phoneNumber: "+7 (922) 712-23-43",
          },
          diagnosis: "пульпит, удаление зуба",
          time: "12:30",
        },
      ],
    },
    {
      title: "11 сентября",
      data: [
        {
          user: {
            avatar:
              "https://lh3.googleusercontent.com/proxy/_J269RJvPbvDnk-BbJkX-haJdZIBOzdOaE4rIRbBLHaroDE-iqHU8vr9_LqKPDOYICHHNCn6gobxqmK-RCuSIa50TLda0vkn01nOvBsB94MUIuMc7wlGnvhsdZtHOFU3GR13UWS5RGTl",
            fullName: "Анастасия Захарова",
            phoneNumber: "+7 (922) 712-23-43",
          },
          diagnosis: "пульпит, удаление зуба",
          time: "12:30",
          active: true,
        },
        {
          user: {
            avatar:
              "https://lh3.googleusercontent.com/proxy/_J269RJvPbvDnk-BbJkX-haJdZIBOzdOaE4rIRbBLHaroDE-iqHU8vr9_LqKPDOYICHHNCn6gobxqmK-RCuSIa50TLda0vkn01nOvBsB94MUIuMc7wlGnvhsdZtHOFU3GR13UWS5RGTl",
            fullName: "Василий Пупкин",
            phoneNumber: "+7 (922) 712-23-43",
          },
          diagnosis: "пульпит, удаление зуба",
          time: "12:30",
        },
      ],
    },
    {
      title: "11 сентября",
      data: [
        {
          user: {
            avatar:
              "https://lh3.googleusercontent.com/proxy/_J269RJvPbvDnk-BbJkX-haJdZIBOzdOaE4rIRbBLHaroDE-iqHU8vr9_LqKPDOYICHHNCn6gobxqmK-RCuSIa50TLda0vkn01nOvBsB94MUIuMc7wlGnvhsdZtHOFU3GR13UWS5RGTl",
            fullName: "Анастасия Захарова",
            phoneNumber: "+7 (922) 712-23-43",
          },
          diagnosis: "пульпит, удаление зуба",
          time: "12:30",
          active: true,
        },
        {
          user: {
            avatar:
              "https://lh3.googleusercontent.com/proxy/_J269RJvPbvDnk-BbJkX-haJdZIBOzdOaE4rIRbBLHaroDE-iqHU8vr9_LqKPDOYICHHNCn6gobxqmK-RCuSIa50TLda0vkn01nOvBsB94MUIuMc7wlGnvhsdZtHOFU3GR13UWS5RGTl",
            fullName: "Василий Пупкин",
            phoneNumber: "+7 (922) 712-23-43",
          },
          diagnosis: "пульпит, удаление зуба",
          time: "12:30",
        },
      ],
    },
    {
      title: "11 сентября",
      data: [
        {
          user: {
            avatar:
              "https://lh3.googleusercontent.com/proxy/_J269RJvPbvDnk-BbJkX-haJdZIBOzdOaE4rIRbBLHaroDE-iqHU8vr9_LqKPDOYICHHNCn6gobxqmK-RCuSIa50TLda0vkn01nOvBsB94MUIuMc7wlGnvhsdZtHOFU3GR13UWS5RGTl",
            fullName: "Анастасия Захарова",
            phoneNumber: "+7 (922) 712-23-43",
          },
          diagnosis: "пульпит, удаление зуба",
          time: "12:30",
          active: true,
        },
        {
          user: {
            avatar:
              "https://lh3.googleusercontent.com/proxy/_J269RJvPbvDnk-BbJkX-haJdZIBOzdOaE4rIRbBLHaroDE-iqHU8vr9_LqKPDOYICHHNCn6gobxqmK-RCuSIa50TLda0vkn01nOvBsB94MUIuMc7wlGnvhsdZtHOFU3GR13UWS5RGTl",
            fullName: "Василий Пупкин",
            phoneNumber: "+7 (922) 712-23-43",
          },
          diagnosis: "пульпит, удаление зуба",
          time: "12:30",
        },
      ],
    },
    {
      title: "11 сентября",
      data: [
        {
          user: {
            avatar:
              "https://lh3.googleusercontent.com/proxy/_J269RJvPbvDnk-BbJkX-haJdZIBOzdOaE4rIRbBLHaroDE-iqHU8vr9_LqKPDOYICHHNCn6gobxqmK-RCuSIa50TLda0vkn01nOvBsB94MUIuMc7wlGnvhsdZtHOFU3GR13UWS5RGTl",
            fullName: "Анастасия Захарова",
            phoneNumber: "+7 (922) 712-23-43",
          },
          diagnosis: "пульпит, удаление зуба",
          time: "12:30",
          active: true,
        },
        {
          user: {
            avatar:
              "https://lh3.googleusercontent.com/proxy/_J269RJvPbvDnk-BbJkX-haJdZIBOzdOaE4rIRbBLHaroDE-iqHU8vr9_LqKPDOYICHHNCn6gobxqmK-RCuSIa50TLda0vkn01nOvBsB94MUIuMc7wlGnvhsdZtHOFU3GR13UWS5RGTl",
            fullName: "Василий Пупкин",
            phoneNumber: "+7 (922) 712-23-43",
          },
          diagnosis: "пульпит, удаление зуба",
          time: "12:30",
        },
      ],
    },
    {
      title: "11 сентября",
      data: [
        {
          user: {
            avatar:
              "https://lh3.googleusercontent.com/proxy/_J269RJvPbvDnk-BbJkX-haJdZIBOzdOaE4rIRbBLHaroDE-iqHU8vr9_LqKPDOYICHHNCn6gobxqmK-RCuSIa50TLda0vkn01nOvBsB94MUIuMc7wlGnvhsdZtHOFU3GR13UWS5RGTl",
            fullName: "Анастасия Захарова",
            phoneNumber: "+7 (922) 712-23-43",
          },
          diagnosis: "пульпит, удаление зуба",
          time: "12:30",
          active: true,
        },
        {
          user: {
            avatar:
              "https://lh3.googleusercontent.com/proxy/_J269RJvPbvDnk-BbJkX-haJdZIBOzdOaE4rIRbBLHaroDE-iqHU8vr9_LqKPDOYICHHNCn6gobxqmK-RCuSIa50TLda0vkn01nOvBsB94MUIuMc7wlGnvhsdZtHOFU3GR13UWS5RGTl",
            fullName: "Василий Пупкин",
            phoneNumber: "+7 (922) 712-23-43",
          },
          diagnosis: "пульпит, удаление зуба",
          time: "12:30",
        },
      ],
    },
  ];

  return (
    <Container>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <Group navigate={navigation.navigate} items={item} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <GroupTitle>{title}</GroupTitle>
        )}
      />
      <PlusButton>
        <Ionicons name="ios-add" size={30} color="white" />
      </PlusButton>
    </Container>
  );
};

export default HomeScreen;

const PlusButton = styled.TouchableOpacity`
  width: 64px;
  height: 64px;
  background: #2a86ff;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 15px;
  right: 15px;
`;

const Container = styled.View`
  flex: 1;
`;
