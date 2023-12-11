import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

export const RenderPdfPaye = ({data, eliminar}) => {

    // Define el estilo del documento
    const styles = StyleSheet.create({
        page: {
            flexDirection: 'column',
            backgroundColor: '#ffffff',
            padding: 10,
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1,
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 10,
        },
        text: {
            fontSize: 12,
            marginBottom: 5,
        },
    });   
    
    // Define el componente PDF
      const MyPaye = ({item}) => (
        <Document>
          <Page style={styles.page}>
            <View style={styles.section}>
              <Text style={styles.title}>Mi recivo</Text>
                <View key={item.id}>
                  <Text style={styles.text}>Nombre: {item.nombre} {item.apellidos}</Text>
                  <Text style={styles.text}>Plan: {item.plan}</Text>
                  <Text style={styles.text}>Pago: ${item.amount}</Text>
                  <Text style={styles.text}>Número de orden: {item.order_id}</Text>
                </View>
            </View>
          </Page>
        </Document>
      );

  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    localStorage.setItem("myData", JSON.stringify(newData));
    setData(newData);
};

  return (
    <>
      
      {data.map((item) => (
      <div className='content__recivo'>
        <p className='content__items_title'>Recibo</p>
        <div className='card-content-reciv' key={item.id}>
          <h3 className='card-title'>{item.nombre} {item.apellidos}</h3>
          <p className='card-description-reciv'>Plan: {item.plan}</p>
          <p className='card-description-reciv'>Pago: ${item.amount}</p>
          <p className='card-description-reciv'>Número de orden: {item.order_id}</p>
          <div className='card-div-buttons'>
            <button className='button__item_delete' onClick={() => eliminar(item.id)}>
              Eliminar
            </button>
            <PDFDownloadLink className='content__link_download' document={<MyPaye item={item} />} fileName="datos.pdf">
              {({ blob, url, loading, error }) =>
                loading ? 'Cargando documento...' : 'Descargar pdf'
              }
            </PDFDownloadLink>
          </div>

        </div>
      </div>
      ))}
    </>
  )
}
