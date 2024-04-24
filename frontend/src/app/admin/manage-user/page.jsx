'use client'
import React, { useEffect, useState } from 'react';
import { Avatar, Badge, Table, Group, Text, ActionIcon, Anchor, rem, Button } from '@mantine/core';
import { IconPencil, IconPlus, IconTrash } from '@tabler/icons-react';

const data = [
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
    name: 'Ram Gopal',
    job: 'Engineer',
    email: 'rob_wolf@gmail.com',
    phone: '+44 (452) 886 09 12',
  },
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
    name: 'Ayush Singh',
    job: 'Engineer',
    email: 'jj@breaker.com',
    phone: '+44 (934) 777 12 76',
  },
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
    name: 'Hemant yadav',
    job: 'Designer',
    email: 'henry@silkeater.io',
    phone: '+44 (901) 384 88 34',
  },
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png',
    name: 'Junaid Usmani',
    job: 'Designer',
    email: 'bhorsefighter@gmail.com',
    phone: '+44 (667) 341 45 22',
  },
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png',
    name: 'Mohammad Mubassir',
    job: 'Manager',
    email: 'jeremy@foot.dev',
    phone: '+44 (881) 245 65 65',
  },
];

const jobColors = {
  engineer: 'blue',
  manager: 'cyan',
  designer: 'pink',
};

const ManageUser = () => {

  const [userList, setUserList] = useState([])

  const fetchUserData = () => {
    fetch('http://localhost:5000/user/getall')
      .then((response) => {
        if (response.status === 200) {
          response.json()
            .then((result) => {
              console.log(result);
              setUserList(result);
            })
        }
      }).catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchUserData();
  }, [])

  const deleteUser = (id) => {
    fetch('http://localhost:5000/user/delete/' + id, {
      method: 'DELETE'
    })
      .then((response) => {
        if (response.status === 200) {
          fetchUserData();
        }
      }).catch((err) => {
        console.log(err);
      });
  }

  const displayUser = () => {
    return (
      <Table.ScrollContainer minWidth={800}>
        <Table verticalSpacing="md">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Users</Table.Th>
              <Table.Th>Mail</Table.Th>
              <Table.Th>Password</Table.Th>
              <Table.Th>Action</Table.Th>
              <Table.Th />
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
          {
            userList.map((user) => {
              return (
                  <Table.Tr>
                    <Table.Td>{user.name}</Table.Td>
                    <Table.Td>{user.email}</Table.Td>
                    <Table.Td>{user.password}</Table.Td>
                    <Table.Td>
                    <Button justify="center"  variant="gradient"
                    gradient={{ from: 'red', to: 'cyan', deg: 90 }}
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </Button>
                    </Table.Td>
                  </Table.Tr>
                )
              })
            }
            </Table.Tbody>

        </Table>
      </Table.ScrollContainer>
    )
  }

  const rows = data.map((item) => (
    <Table.Tr key={item.name}>
      <Table.Td>
        <Group gap="sm">
          <Avatar size={30} src={item.avatar} radius={30} />
          <Text fz="sm" fw={500}>
            {item.name}
          </Text>
        </Group>
      </Table.Td>

      <Table.Td>
        <Badge color={jobColors[item.job.toLowerCase()]} variant="light">
          {item.job}
        </Badge>
      </Table.Td>
      <Table.Td>
        <Anchor component="button" size="sm">
          {item.email}
        </Anchor>
      </Table.Td>
      <Table.Td>
        <Text fz="sm">{item.phone}</Text>
      </Table.Td>
      <Table.Td>
        <Group gap={0} justify="flex-end">
          <ActionIcon variant="subtle" color="gray">
            <IconPencil style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant="subtle" color="red">
            <IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <div style={{ marginTop: '100px' }}>
      {
        displayUser()
      }
    </div>
  );
}

export default ManageUser;
