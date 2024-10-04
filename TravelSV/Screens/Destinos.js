import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function Destinos() {
  // Datos locales de departamentos y sus lugares turísticos
  const departamentosData = [
    {
      nombre: 'San Salvador',
      imagen: 'https://elsalvador.travel/system/wp-content/uploads/2024/06/centro01.jpg',
      lugares: [
        {
          nombre: 'Parque Nacional El Boquerón',
          descripcion: 'Un parque con impresionantes vistas al cráter del volcán.',
          imagen: 'https://www.todoturismo.sv/custom/domain_1/image_files/sitemgr_photo_4139.png',
        },
        {
          nombre: 'Plaza Libertad',
          descripcion: 'El corazón del centro histórico de San Salvador.',
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Plazalibertad_es.JPG',
        },
      ],
    },
    {
      nombre: 'Ahuachapán',
      imagen: 'https://elsalvador.travel/system/wp-content/uploads/2020/01/Ahuachapa%CC%81n-16032022-Ne%CC%81stor-Trigueros6.jpg',
      lugares: [
        {
          nombre: 'Termales de Santa Teresa',
          descripcion: 'Famosas aguas termales en medio de la naturaleza.',
          imagen: 'https://www.visitcentroamerica.com/wp-content/uploads/2021/07/wellness-salvador-termales-santa-teresa_0001_Foto-3.jpg',
        },
        {
          nombre: 'Laguna El Espino',
          descripcion: 'Un hermoso cuerpo de agua rodeado de montañas.',
          imagen: 'https://turismo.sv/wp-content/uploads/2019/06/laguna-el-espino-1.jpg',
        },
      ],
    },
    {
      nombre: 'Sonsonate',
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Catedral_de_Sonsonate.jpg/640px-Catedral_de_Sonsonate.jpg',
      lugares: [
        {
          nombre: 'Ruta de Las Flores',
          descripcion: 'Una ruta pintoresca llena de pueblos coloniales.',
          imagen: 'https://www.visitcentroamerica.com/wp-content/uploads/2017/08/ver-centroamerica-el-salvador-ruta-de-flores-01.jpg',
        },
        {
          nombre: 'Playa Los Cóbanos',
          descripcion: 'Una de las playas más visitadas por los turistas.',
          imagen: 'https://turismo.sv/wp-content/uploads/2019/06/los-cobanos-5.jpg',
        },
      ],
    },
    {
      nombre: 'Santa Ana',
      imagen: 'https://example.com/santa-ana.jpg',
      lugares: [
        {
          nombre: 'Teatro de Santa Ana',
          descripcion: 'Uno de los teatros más emblemáticos del país.',
          imagen: 'https://example.com/teatro-santa-ana.jpg',
        },
        {
          nombre: 'Cerro Verde',
          descripcion: 'Un destino popular para excursiones y caminatas.',
          imagen: 'https://example.com/cerro-verde.jpg',
        },
      ],
    },
    {
      nombre: 'Chalatenango',
      imagen: 'https://example.com/chalatenango.jpg',
      lugares: [
        {
          nombre: 'Cerro El Pital',
          descripcion: 'El punto más alto de El Salvador, con clima fresco.',
          imagen: 'https://example.com/el-pital.jpg',
        },
        {
          nombre: 'Embalse Cerrón Grande',
          descripcion: 'Un lago artificial perfecto para deportes acuáticos.',
          imagen: 'https://example.com/cerron-grande.jpg',
        },
      ],
    },
    {
      nombre: 'Cuscatlán',
      imagen: 'https://example.com/cuscatlan.jpg',
      lugares: [
        {
          nombre: 'Cojutepeque',
          descripcion: 'Famoso por su parque y su deliciosa gastronomía.',
          imagen: 'https://example.com/cojutepeque.jpg',
        },
        {
          nombre: 'Cerro de las Pavas',
          descripcion: 'Un cerro con vistas panorámicas espectaculares.',
          imagen: 'https://example.com/cerro-pavas.jpg',
        },
      ],
    },
    {
      nombre: 'La Paz',
      imagen: 'https://example.com/la-paz.jpg',
      lugares: [
        {
          nombre: 'Playa Costa del Sol',
          descripcion: 'Un destino popular entre los amantes de la playa.',
          imagen: 'https://example.com/costa-sol.jpg',
        },
        {
          nombre: 'Laguna de Apastepeque',
          descripcion: 'Una laguna ideal para la pesca y el turismo.',
          imagen: 'https://example.com/apastepeque.jpg',
        },
      ],
    },
    {
      nombre: 'San Vicente',
      imagen: 'https://example.com/san-vicente.jpg',
      lugares: [
        {
          nombre: 'Volcán de San Vicente',
          descripcion: 'Un impresionante volcán con rutas de senderismo.',
          imagen: 'https://example.com/volcan-san-vicente.jpg',
        },
        {
          nombre: 'Iglesia El Pilar',
          descripcion: 'Una histórica iglesia en el corazón de San Vicente.',
          imagen: 'https://example.com/iglesia-pilar.jpg',
        },
      ],
    },
    {
      nombre: 'Cabañas',
      imagen: 'https://example.com/cabanas.jpg',
      lugares: [
        {
          nombre: 'Cerro Guazapa',
          descripcion: 'Famoso por su historia y rutas de senderismo.',
          imagen: 'https://example.com/guazapa.jpg',
        },
        {
          nombre: 'Iglesia de Sensuntepeque',
          descripcion: 'Un hermoso edificio colonial en el centro de la ciudad.',
          imagen: 'https://example.com/iglesia-sensuntepeque.jpg',
        },
      ],
    },
    {
      nombre: 'Usulután',
      imagen: 'https://example.com/usulutan.jpg',
      lugares: [
        {
          nombre: 'Bahía de Jiquilisco',
          descripcion: 'Un lugar paradisíaco lleno de biodiversidad.',
          imagen: 'https://example.com/jiquilisco.jpg',
        },
        {
          nombre: 'Playa El Espino',
          descripcion: 'Una de las playas más hermosas del oriente del país.',
          imagen: 'https://example.com/playa-espino.jpg',
        },
      ],
    },
    {
      nombre: 'San Miguel',
      imagen: 'https://example.com/san-miguel.jpg',
      lugares: [
        {
          nombre: 'Festival de San Miguel',
          descripcion: 'Uno de los festivales más grandes del país.',
          imagen: 'https://example.com/festival-san-miguel.jpg',
        },
        {
          nombre: 'Catedral Basílica de San Miguel',
          descripcion: 'Una de las catedrales más impresionantes de El Salvador.',
          imagen: 'https://example.com/catedral-san-miguel.jpg',
        },
      ],
    },
    {
      nombre: 'Morazán',
      imagen: 'https://example.com/morazan.jpg',
      lugares: [
        {
          nombre: 'Perquín',
          descripcion: 'Un pueblo famoso por su historia relacionada a la guerra civil.',
          imagen: 'https://example.com/perquin.jpg',
        },
        {
          nombre: 'Río Sapo',
          descripcion: 'Un destino natural para amantes de la naturaleza.',
          imagen: 'https://example.com/rio-sapo.jpg',
        },
      ],
    },
    {
      nombre: 'La Unión',
      imagen: 'https://example.com/la-union.jpg',
      lugares: [
        {
          nombre: 'Golfo de Fonseca',
          descripcion: 'Un impresionante golfo compartido con Honduras y Nicaragua.',
          imagen: 'https://example.com/golfo-fonseca.jpg',
        },
        {
          nombre: 'Isla de Meanguera',
          descripcion: 'Una hermosa isla en el Golfo de Fonseca.',
          imagen: 'https://example.com/meanguera.jpg',
        },
      ],
    },
  ];

  const [selectedDept, setSelectedDept] = useState(null);  // Departamento seleccionado

  const handleDeptSelection = (dept) => {
    setSelectedDept(dept);
  };

  return (
    <View style={styles.container}>
      

      {selectedDept === null ? (
        <ScrollView contentContainerStyle={styles.cardContainer}>
          {departamentosData.map((dept, index) => (
            <TouchableOpacity key={index} style={styles.card} onPress={() => handleDeptSelection(dept)}>
              <Image source={{ uri: dept.imagen }} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{dept.nombre}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <ScrollView>
          <Text style={styles.subtitle}>Lugares turísticos en {selectedDept.nombre}</Text>
          {selectedDept.lugares.map((lugar, index) => (
            <View key={index} style={styles.lugarCard}>
              <Image source={{ uri: lugar.imagen }} style={styles.lugarImage} />
              <Text style={styles.lugarTitle}>{lugar.nombre}</Text>
              <Text style={styles.lugarDescripcion}>{lugar.descripcion}</Text>
            </View>
          ))}
          <TouchableOpacity style={styles.backButton} onPress={() => setSelectedDept(null)}>
            <Text style={styles.backButtonText}>Volver a departamentos</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#D9F0FF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#6F73D2',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6F73D2',
    marginBottom: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    color: '#6F73D2',
  },
  lugarCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  lugarImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  lugarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#6F73D2',
  },
  lugarDescripcion: {
    fontSize: 14,
    marginTop: 5,
    color: '#6f6f6f',
  },
  backButton: {
    marginTop: 20,
    backgroundColor: '#6F73D2',
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
