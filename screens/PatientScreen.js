import React from "react";
import { Foundation, Ionicons } from "@expo/vector-icons";

import styled from "styled-components/native";

import { GrayText, ButtonPrimary, Badge } from "../components";

const PatientScreen = ({ navigation }) => {
  const fullName = navigation.getParam("user").fullName;
  const phoneNumber = navigation.getParam("user").phoneNumber;

  return (
    <>
      <Container>
        <PatientFullName>{fullName}</PatientFullName>
        <GrayText>{phoneNumber}</GrayText>
        <PatientButtons>
          <FormulaButtonView>
            <ButtonPrimary>Формула зубов</ButtonPrimary>
          </FormulaButtonView>
          <PhoneButtonView>
            <ButtonPrimary color="green">
              <Foundation name="telephone" size={20} color="white" />
            </ButtonPrimary>
          </PhoneButtonView>
        </PatientButtons>
      </Container>
      <PatientAppointments>
        <Container>
          <AppointmentCard>
            <MoreButton>
              <Ionicons name="apps-outline" size={16} color="#A3A3A3" />
            </MoreButton>
            <AppointmentCardRow>
              <Ionicons name="md-medical" size={16} color="#A3A3A3" />
              <AppointmentCardLabel>
                Зуб: <AppointmentCardLabelBold>12</AppointmentCardLabelBold>
              </AppointmentCardLabel>
            </AppointmentCardRow>
            <AppointmentCardRow>
              <Ionicons name="clipboard-outline" size={16} color="#A3A3A3" />
              <AppointmentCardLabel>
                Диагноз:{" "}
                <AppointmentCardLabelBold>Пульпит</AppointmentCardLabelBold>
              </AppointmentCardLabel>
            </AppointmentCardRow>
            <AppointmentCardRow
              style={{ justifyContent: "space-between", marginTop: 15 }}
            >
              <Badge active style={{ width: 175 }}>
                11.10.2020 - 15:30
              </Badge>
              <Badge
                colors={{
                  background: "rgba(132, 210, 105, 0.21)",
                  color: "#61B342",
                }}
              >
                1500 Р
              </Badge>
            </AppointmentCardRow>
          </AppointmentCard>
        </Container>
      </PatientAppointments>
    </>
  );
};

const Container = styled.View`
  padding: 25px;
`;

const PatientFullName = styled.Text`
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  margin-bottom: 2px;
`;

const PatientButtons = styled.View`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
`;

const PhoneButtonView = styled.View`
  margin-left: 10px;
  width: 45px;
`;

const FormulaButtonView = styled.View`
  flex: 1;
`;

const PatientAppointments = styled.View`
  flex: 1;
`;

const AppointmentCard = styled.View`
  padding: 20px 25px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 20px 10px 5px black;
`;

const AppointmentCardLabel = styled.Text`
  font-size: 16px;
  margin-left: 10px;
`;

const AppointmentCardLabelBold = styled.Text`
  font-weight: bold;
`;

const AppointmentCardRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 3.5px;
  margin-bottom: 3.5px;
`;

const MoreButton = styled.TouchableOpacity`
  position: absolute;
  right: 25px;
  top: 25px;
`;

export default PatientScreen;
